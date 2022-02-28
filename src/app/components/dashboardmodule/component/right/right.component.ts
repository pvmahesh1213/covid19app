import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../core/dataShare.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @Input() chatData: any;
  timeSeriesData: any = null;
  normalData: any = null;
  status: any = null;
  indiaStates: any;
  cardData: any;
  indiaStatesValues: any[] = [];
  constructor(private shareDataService: ShareDataService) {

  }

  ngOnInit() {
    this.shareDataService.getData().subscribe((res) => {
      this.status = res;
      this.cardData = this.shareDataService.cards;
      if (this.chatData && this.chatData.data && this.chatData.data.length) {
        this.timeSeriesData = this.chatData.data[0];
        this.normalData = this.chatData.data[1];
        this.indiaStates = this.shareDataService.states;
        this.indiaStatesValues = Object.values(this.indiaStates);
      }
    });
  }

  onChange(value) {
   // console.log(value);
    if (this.status.place != value) {
      this.status.place = value;
      this.shareDataService.sendData(this.status);
    }
  }

}
