import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  brews: Object;
  business: Object;
  name: number = 0;
  excelArray: Array<Object> = [
    {
      orgnr: 1091,
      aarsresultat: 97000,
      bransjekode: 997539222
    },
    {
      orgnr: 3981,
      aarsresultat: 95290,
      bransjekode: 997558510
    },
    {
      orgnr: 67881,
      aarsresultat: 47111,
      bransjekode: 997615018
    }
  ];

  excelArray2 = [97000, 95290, 47111];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        name: "Random data",
        data: (function() {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i,
            excel = [97000, 95290, 47111],
            excelObjects = [
              {
                orgnr: 1091,
                aarsresultat: 97000,
                bransjekode: 997539222
              },
              {
                orgnr: 3981,
                aarsresultat: 95290,
                bransjekode: 997558510
              },
              {
                orgnr: 67881,
                aarsresultat: 47111,
                bransjekode: 997615018
              }
            ];

          for (i = 0; i < 3; i += 1) {
            data.push({
              x: excelObjects[i].orgnr,
              y: excelObjects[i].aarsresultat,
              addPoint([x, y]);
            });
          }
          return data;
        })()
      }
    ]
  };

  constructor(private _http: HttpService) {}

  // Lifecycle-hook - whatever in here runs when component is loaded
  ngOnInit() {
    this._http.myMethod().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
    // this.chartOptions.series[0].data.y = this.excelArray2;
    //this.excelArray2 = [97000, 95290, 47111];
    console.log("data from init:", this.chartOptions.series);

    console.log("Excel:", this.excelArray);

    if (name > 100) {
      console.log("value is", name);
    }
  }
}
