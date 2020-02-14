import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpService } from "src/app/http.service";
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-post-card-component",
  templateUrl: "./post-card-component.component.html",
  styleUrls: ["./post-card-component.component.scss"]
})
export class PostCardComponentComponent implements OnInit {
  @Input() posts: any;
  env: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.env = environment["url"]
    this._http.newPost.subscribe(data => {
      this.posts = data;
    });
  }

  widePost(link) {
    console.log(link);
    Swal.fire({
      showClass: {
        popup: "animated bounceIn"
      },
      hideClass: {
        popup: "animated bounceOut"
      },
      background: "transparent",
      heightAuto: true,
      width: 700,
      showConfirmButton: false,
      imageUrl: `${environment["url"]}/uploads/${link}`
    });
  }
}
