import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../core/dataShare.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mapdata: any;
  @Input() status: any;
  @Input() states: any;

  cards: any[];

  constructor(private dataShare: ShareDataService) {
    this.cards = this.dataShare.cards;
  }

  ngOnInit() {
  }

  casesCount(status) {
    let total = this.mapdata['TT'].total;
    if (status == 'active') {
      return (total.confirmed - (total.deceased + total.recovered)).toLocaleString();
    }
    return (total[status]).toLocaleString();
  }

  casesDelta(status) {
    let total = this.mapdata['TT'].delta;
    if (status == 'active') {
      let count = total.confirmed - (total.deceased + total.recovered)
      return (count > 0 ? "+" + count : 0).toLocaleString();
    }
    return "+" + (total[status]).toLocaleString();
  }

  changeStatus(status) {
    this.status['status'] = status;
    this.dataShare.sendData(this.status);
  }

}
