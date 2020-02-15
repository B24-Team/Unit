import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ObservableLike } from "rxjs";
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-posts-section",
  templateUrl: "./posts-section.component.html",
  styleUrls: ["./posts-section.component.scss"]
})
export class PostsSectionComponent implements OnInit {
  constructor(private http: HttpClient) { }

  user_id: string = localStorage.getItem("user_id");
  Data: any;
  Filtered: any = [];

  env: any;

  getData() {
    return this.http
      .post(`${environment["url"]}/posts/get`, { user_id: this.user_id })
      .subscribe(data => {
        this.Data = data;
        this.Filtered = data;
      });
  }

  ngOnInit() {
    this.env = environment["url"]
    this.getData();
  }
  filter(event) {
    this.Filtered = []
    if (event["index"] == 1) {
      for (var i = 0; i < this.Data.length; i++) {
        if (this.Data[i]["type"] == "image") {
          this.Filtered.push(this.Data[i])
        }
      }
    } else if (event["index"] == 2) {
      for (var i = 0; i < this.Data.length; i++) {
        if (this.Data[i]["type"] == "video") {
          this.Filtered.push(this.Data[i])
        }
      }
    } else if (event["index"] == 3) {
      for (var i = 0; i < this.Data.length; i++) {
        if (this.Data[i]["type"] == "audio") {
          this.Filtered.push(this.Data[i])
        }
      }
    } else {
      this.Filtered = this.Data
    }
  }

  delete(item) {
    console.log(item, "delete this item");
    var resultOp = false;
    var footage = item;

    // shaking animation//
    var card = document.getElementById("card");
    card.classList.add("animated");
    card.classList.add("shake");
    // shaking animation//

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          resultOp = true;
        }
      })
      .then(() => {
        if (resultOp) {
          this.http
            .post(`${environment["url"]}/posts/delete`, {
              user_id: this.user_id,
              id: footage
            })
            .subscribe(data => {
              if ((data = "Deleted")) {
                this.getData();
              }
            });
        }
      });
  }
  widePost(link) {
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
