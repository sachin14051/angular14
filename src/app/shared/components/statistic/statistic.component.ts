import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  Highcharts :any 
  constructor() { }

  ngOnInit(): void {
    
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [10,20,30,40,50,60,70,91,125]
      }],
      xaxis: {
        categories: ["sun","mon","tue","wed","thu","fri","sat",]
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render()
  
  

}
}
