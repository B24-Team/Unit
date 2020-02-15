import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  newPost: Subject<object> = new Subject();
  newUser: Subject<object> = new Subject();
  // profile: Subject<object> = new Subject();

  constructor(private _http: HttpClient) { }

  getAllPosts() {
    return this._http.get(`${environment["url"]}/posts/getAllPosts`);
  }

  getAllUsers() {
    return this._http.get(`${environment["url"]}/getAllUsers`);
  }
}
