import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService) {}

  // Lifecycle-hook - whatever in here runs when component is loaded
  ngOnInit() {
    this._http.myMethod().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
