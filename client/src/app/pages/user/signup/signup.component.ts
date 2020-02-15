import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors: any = [];
  notifyMessage = "";
  name = "";
  email = "";
  username = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      if (params.registered === "success") {
        this.notifyMessage = "You have been successfully registered";
      }
    });
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
  }
  isInvalidForm(fieldName): boolean {
    return (
      this.signupForm.controls[fieldName].invalid &&
      (this.signupForm.controls[fieldName].dirty ||
        this.signupForm.controls[fieldName].touched)
    );
  }
  isRequired(fieldName): boolean {
    return this.signupForm.controls[fieldName].errors.required;
  }

  signup() {
    this.http
      .post(`${environment["url"]}/signup`, this.signupForm.value)
      .subscribe(data => {
        console.log(data);
        if (data["success"]) {
          localStorage.setItem("user", JSON.stringify(data["payload"]));
          localStorage.setItem("user_id", data["payload"]["id"]);
          localStorage.setItem("email", data["payload"]["email"]);
          localStorage.setItem("token", data["token"]);
          localStorage.setItem("refreshtoken", data["refreshtoken"]);
          this._router.navigate(["edit"]);
        } else {
          this.name = "";
          this.email = "";
          this.username = "";
          alert(data["message"] || data["email"] || data["password"] || data["confirmPassword"]);
        }
      });
    // console.log(this.signupForm.value);
  }
}
