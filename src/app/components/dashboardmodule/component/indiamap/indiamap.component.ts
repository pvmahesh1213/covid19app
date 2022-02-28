import { AfterViewInit, OnInit, Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
import HC_mapdata from 'highcharts/modules/data';
import { BaseService } from 'src/app/core/base.service';
import { ShareDataService } from '../../../../core/dataShare.service';
//import IndiaMap from '@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json';


HC_map(HighCharts);
HC_mapdata(HighCharts);


@Component({
  selector: 'app-indiamap',
  templateUrl: './indiamap.component.html',
  styleUrls: ['./indiamap.component.css']
})
export class IndiamapComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() mapdata: any;
  @Input() status: any;
  @Input() states: any;
  //Highcharts: any = window['Highcharts'];

  @ViewChild('mapChart') mapChart: ElementRef;

  data = [];

  options: any = {
    chart: {
      map: null,
      zoomType: null
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    tooltip: {
      enabled: false
    },
    colorAxis: {
      min: 0,
      minColor: '#fff',
      maxColor: '#fff'
    },

    plotOptions: {
      map: {
        borderColor: '#4c75f2',
        allAreas: true,
        borderWidth: 2,
      }
    },

    series: [{
      //data: this.data,
      name: 'Random data',
      states: {
        hover: {
          color: '#fff'
        }
      },
      dataLabels: {
        enabled: false,
        format: '{point.name}'
      }
    }, {
      type: 'mapbubble',
      name: 'Population 2016',
      joinBy: ['hc-key', 'hc-key'],
      data: this.data,
      minSize: 8,
      maxSize: '16%',
      tooltip: {
        pointFormat: '{point.properties.hc-key}: {point.z} thousands'
      }
    }]
  }

  chartInstance: any;

  constructor(private baseservice: BaseService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.bubbleData();
    this.pieChartBrowser();

    this.shareDataService.getData().subscribe((res) => {
      this.status = res;
      if (this.chartInstance) {
        this.data = [];
        this.bubbleData();
        let active = this.shareDataService.cards.find((res) => {
          if (res.status == this.status.status) {
            return res;
          }
        })
        this.chartInstance.series[0].update({
          borderWidth: 2,
          borderColor: active.bgtextcolor
        });
        this.chartInstance.series[1].update({
          data: this.data
        }, true)
      }
    })
  }
  private bubbleData() {
    Object.keys(this.mapdata).forEach(element => {
      let activeData;
      if (this.status.status == "active") {
        let total = this.mapdata[element].total;
        activeData = total.confirmed - (total.deceased + total.recovered);
      }
      if (this.states[element]) {
        let currentStateColor = (this.status.place == this.states[element]) ? "#051937" : this.shareDataService.cards.find((res) => res.status === this.status.status).bgcolor;
        this.data.push({
          'hc-key': this.states[element],
          z: this.status.status == "active" ? activeData : this.mapdata[element].total[this.status.status],
          color: currentStateColor
        });
      }
    });
  }

  pieChartBrowser() {

    this.baseservice.get('https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.geo.json').subscribe((geojson) => {
      this.options.chart.map = geojson;
      this.chartInstance = HighCharts.mapChart(this.mapChart.nativeElement, this.options);
    })
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
