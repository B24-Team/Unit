import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  Email: string = "";
  Username: string = "";
  Name: string = "";
  Age: string = "";
  Gender: string = "";
  Bio: string = "";
  Pass: string = "";
  ConfirmPass: string = "";

  constructor(private http: HttpClient) { }
  ngOnInit() {
    var user_id = localStorage.getItem("user_id");
    this.http
      .post(`${environment["url"]}/findById`, { user_id })
      .subscribe(data => {
        console.log(data);
        this.Email = data["email"];
        this.Name = data["name"];
        this.Username = data["username"];
        this.Age = data["age"];
        this.Gender = data["gender"];
        this.Bio = data["bio"];
      });
  }

  //////////////////////////////////////// Event Listeners
  UpdateUsername(event: any) {
    this.Username = event.target.value;
    console.log("new username", this.Username);
  }
  UpdateName(event: any) {
    this.Name = event.target.value;
    console.log("new Name", this.Name);
  }
  UpdateAge(event: any) {
    this.Age = event.target.value;
    if (this.Age.length > 2) {
      Swal.fire({
        icon: "error",
        titleText: "You can't be over 100 years old."
      });
    }
    console.log("new Age", this.Age);
  }
  UpdateGender(event: any) {
    this.Gender = event.target.value;
    console.log("new Gender", this.Gender);
  }
  UpdateBio(event: any) {
    this.Bio = event.target.value;
    console.log("new Bio", this.Bio);
  }
  UpdatePass(event: any) {
    this.Pass = event.target.value;
    console.log("new Pass", this.Pass);
  }
  UpdateConfirmPassword(event: any) {
    this.ConfirmPass = event.target.value;
    console.log("new conf Pass", this.ConfirmPass);
  }
  //////////////////////////////////

  onUpdatePassword() {
    var user_id = localStorage.getItem("user_id");
    if (this.Pass.length >= 6 && this.Pass === this.ConfirmPass) {
      this.http
        .post(`${environment["url"]}/updatepassword`, {
          user_id,
          password: this.Pass
        })
        .subscribe(data => {
          if (data === "Password Was Updated") {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "password was updated !!",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "passwords mismatch or less than 6 characters !!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  onUpdateProfile() {
    var user_id = localStorage.getItem("user_id");
    var obj = {
      user_id,
      name: this.Name,
      username: this.Username,
      age: this.Age,
      gender: this.Gender,
      bio: this.Bio
    };
    this.http
      .post(`${environment["url"]}/updateprofile`, obj)
      .subscribe(data => {
        if ((data = "Profile Updated !!")) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Profile Info updated !!",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Server Error !!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  }
}
