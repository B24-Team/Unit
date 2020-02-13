import { HttpModule, Headers, Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(private http: Http) { }



  loggedIn() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user != null ? true : false;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getUsers() {
    return this.http.get("http://localhost:5000/follow/getfollowersInfo");
  }

  getChatRoomsChat(chatRoom) {
    return this.http.get("http://localhost:5000/chatroom/" + chatRoom);
  }
}
