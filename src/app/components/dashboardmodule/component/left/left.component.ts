import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../core/dataShare.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  @Input() chatData: any;
  timeSeriesData: any = null;
  normalData: any = null;
  status: any = null;
  indiaStates: any;

  constructor(private shareDataService: ShareDataService) {

  }

  ngOnInit() {
    this.shareDataService.getData().subscribe((res) => {
      this.status = res;
      if (this.chatData && this.chatData.data && this.chatData.data.length) {
        this.timeSeriesData = this.chatData.data[0];
        this.normalData = this.chatData.data[1];
        this.indiaStates = this.shareDataService.states;
      }
    });
  }

}
