import { Component } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [2, 4, 6],
        type: "line"
      }
    ]
  };
}
