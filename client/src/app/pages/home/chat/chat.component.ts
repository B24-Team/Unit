import { UserService } from "../../../user.service";
import { Component, OnInit } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  Users;
  env: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.env = environment["url"]
    this.userService.getUsers().subscribe(users => {
      // console.log(users.json(), "u");
      var toShow = users.json()
      var result = []
      for (var i = 0; i < toShow.length; i++) {
        if (toShow[i]["follower_id"] == localStorage.getItem("user_id")) {
          result.push(toShow[i])
        }
      }

      this.Users = result;
    });
  }

  getUser() {
    return this.userService.getLoggedInUser().username;
  }
}
