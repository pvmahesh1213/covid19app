import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import HC_exporting from 'highcharts/modules/exporting';
import { ShareDataService } from '../../../../core/dataShare.service';
HC_exporting(Highcharts);

@Component({
  selector: 'app-seriesmap',
  templateUrl: './seriesmap.component.html',
  styleUrls: ['./seriesmap.component.css']
})
export class SeriesmapComponent implements OnInit {
  @ViewChild('doumlemap') doumlemap: ElementRef;
  @Input() cards: any;
  @Input() timeSeries: any;
  status: any;
  states: any;
  currentState: any;

  chartData: any[] = [];

  seriesChartInstance: any;

  chartOption: any = {
    rangeSelector: {
      selected: 2
    },
    credits: {
      enabled: false
    },
    navigator: { enabled: false },
    scrollbar: {
      enabled: false
    },
    series: [{
      name: 'AAPL Stock Price',
      type: 'area',
      data: [],
      lineWidth: 0,
      marker: {
        enabled: true,
        radius: 2
      },
      tooltip: {
        valueDecimals: 2
      },
      states: {
        hover: {
          lineWidthPlus: 0
        }
      }
    }]
  }

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.getData().subscribe((res) => {
      this.chartData = [];
      this.status = res;
      this.states = this.shareDataService.states;
      Object.keys(this.states).forEach((res) => {
        if (this.states[res] == this.status.place) {
          this.currentState = this.timeSeries[res];
        }
      })
      Object.keys(this.currentState.dates).forEach((res) => {
        let total = this.currentState.dates[res].total;
        let active;
        if (this.cards.status == "active") {
          let confirmed = total.confirmed ? total.confirmed : 0;
          let deceased = total.deceased ? total.deceased : 0;
          let recovered = total.recovered ? total.recovered : 0;
          active = confirmed - (deceased + recovered);
        } else {
          active = total[this.cards.status];
        }
        this.chartData.push(
          [
            new Date(res).getTime(),
            active
          ]
        );
      });
      if (this.seriesChartInstance) {
        console.log('this.chartData', this.chartData);
        this.seriesChartInstance.series[0].update({
          data: this.chartData
        }, true)
      } else {
        this.chartOption.series[0].data = this.chartData;
        this.chartOption.series[0].color = this.cards.textcolor;
        this.chartOption.chart = {
          backgroundColor: this.cards.bgcolor,
          borderRadius: 10,
        }
        this.chartOption.plotOptions = {
          series: {
            marker: {
              fillColor: this.cards.bgtextcolor,
              lineWidth: 2,
              lineColor: this.cards.bgcolorfill, // inherit from series,
              borderColor: 'black',
              borderWidth: 0.2,
            }
          }
        }
        this.dbChartBrowser();
      }
    })
  }

  dbChartBrowser() {
    this.seriesChartInstance = Highcharts.stockChart(this.doumlemap.nativeElement, this.chartOption);
  }

}
