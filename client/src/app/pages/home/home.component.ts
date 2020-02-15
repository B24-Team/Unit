import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "src/app/http.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  posts: any;
  users: any;

  constructor(
    private router: Router,
    private _http: HttpService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // setInterval(() => {
    //   if (!localStorage.token) {
    //     console.log("no tokeeeeeeeeeeen");
    //     this.router.navigate(["/"]);
    //   }
    // }, 60000); //about 4 minsS
    this.http.get(`${environment["url"]}/refreshtoken`).subscribe(data => {
      localStorage.setItem("user_id", data["payload"]["id"]);
      localStorage.setItem("email", data["payload"]["email"]);
      localStorage.setItem("token", data["token"]);
      localStorage.setItem("refreshtoken", data["refreshToken"]);
      console.log("localSrtorage", localStorage);
    });
    console.log("we are in the home component");
    setInterval(() => {
      //this.counter++;
      //console.log(this.counter, "counter from client");
      return this.http
        .get(`${environment["url"]}/refreshtoken`)
        .subscribe(data => {
          localStorage.setItem("user_id", data["payload"]["id"]);
          localStorage.setItem("email", data["payload"]["email"]);
          localStorage.setItem("token", data["token"]);
          localStorage.setItem("refreshtoken", data["refreshToken"]);
          console.log("localSrtorage", localStorage);
        });
    }, 240000); // keep it  30 * 60 * 1000

    this._http.getAllPosts().subscribe((data) => {
      this.posts = data;
    });

    this._http.getAllUsers().subscribe((data: Array<any>) => {
      this.users = data;
    });
  }
}