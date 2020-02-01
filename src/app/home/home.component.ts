import { Component, OnInit } from "@angular/core";
/* import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; */

/* @NgModule({
  imports: [CommonModule]
}) */
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = "";

  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }
}
