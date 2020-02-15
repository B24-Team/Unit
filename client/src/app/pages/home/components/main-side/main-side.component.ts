import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-main-side",
  templateUrl: "./main-side.component.html",
  styleUrls: ["./main-side.component.scss"]
})
export class MainSideComponent implements OnInit {
  token;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var check = setInterval(() => {
      this.token = localStorage.token;
      if (this.token) {
        clearInterval(check);
      }
    }, 200);
  }

  logout() {
    console.log("hi");
    localStorage.removeItem("token");
    const id = Number(localStorage.getItem("user_id"));
    this.http.post(`${environment["url"]}/logout`, { id }).subscribe(data => {
      localStorage.clear();
    });
  }
}
