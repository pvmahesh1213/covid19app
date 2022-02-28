import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../core/dataShare.service';

@Component({
  selector: 'app-righttopcontainer',
  templateUrl: './righttopcontainer.component.html',
  styleUrls: ['./righttopcontainer.component.css']
})
export class RighttopcontainerComponent implements OnInit {

  @Input() mapdata: any;
  @Input() status: any;
  @Input() states: any;
  cardData: any;
  tested: any = 0;
  casesCount: any;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.getData().subscribe((res) => {
      this.status = res;
      this.cardData = this.shareDataService.cards.find((res) => {
        if (this.status.status == res.status) {
          return res;
        }
      })
      if (this.mapdata['TT'] && this.mapdata['TT'].total && this.mapdata['TT'].total.tested) {
        this.tested = this.mapdata['TT'].total.tested.toLocaleString();
      }
      Object.keys(this.states).forEach(res => {
        if (this.states[res] == this.status.place) {

          let total = this.mapdata[res].total;
          if (this.status.status == 'active') {
            this.casesCount = total.confirmed - (total.deceased + total.recovered);
          } else {
            this.casesCount = total[this.status.status];
          }
        }
      })
    })
  }

  changeStatus(status) {
    this.status['status'] = status;
    this.shareDataService.sendData(this.status);
  }

}
