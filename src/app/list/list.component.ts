import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() result: any;

  brews: Object;
  business: Object;
  //result: number = 0;
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
    chart: {
      type: "column"
    },
    series: [
      {
        name: "Random data",
        data: (function() {
          // generate an array of random data
          let data = [],
            time = new Date().getTime(),
            i,
            excelObjects = [
              {
                aarsresultat: "897605082",
                orgnr: "200",
                bransjekode: "68209",
                bransje: "Utleie av egen eller leid fast eiendom ellers"
              },
              {
                aarsresultat: "997539222",
                orgnr: "1091",
                bransjekode: "97000",
                bransje: "Lønnet arbeid i private husholdninger"
              },
              {
                aarsresultat: "997558510",
                orgnr: "3981",
                bransjekode: "95290",
                bransje:
                  "Reparasjon av andre husholdningsvarer og varer til personlig bruk"
              }
            ];

          for (i = 0; i < 3; i += 1) {
            data.push({
              x: parseInt(excelObjects[i].orgnr), //$(js_city[i]).text()
              y: parseInt(excelObjects[i].aarsresultat)
            });
          }
          // filter here
          //let highNumber = this.result;
          let filteredList = data.filter(d => parseInt(d.y) > this.result);
          return filteredList;
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
