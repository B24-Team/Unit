import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Unit";
  refreshValue = "";
  counter: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment["url"]}/refreshtoken`).subscribe(data => {
      localStorage.setItem("user_id", data["payload"]["id"]);
      localStorage.setItem("email", data["payload"]["email"]);
      localStorage.setItem("token", data["token"]);
      localStorage.setItem("refreshtoken", data["refreshToken"]);
    });
    setInterval(() => {
      if (localStorage.getItem("refreshtoken")) {
        this.refreshValue = localStorage.getItem("refreshtoken");
      }
      this.counter++;
      return this.http
        .get(`${environment["url"]}/refreshtoken`)
        .subscribe(data => {
          console.log("Here you go ",data)
          localStorage.setItem("user_id", data["payload"]["id"]);
          localStorage.setItem("email", data["payload"]["email"]);
          localStorage.setItem("token", data["token"]);
          localStorage.setItem("refreshtoken", data["refreshToken"]);
        });
    }, 240000); // keep it  30 * 60 * 1000
  }
}