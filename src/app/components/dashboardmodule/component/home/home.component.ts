import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chatData: any = null
  constructor(private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.data.subscribe((res) => {
      if (res) {
        this.chatData = res;
      }
    });
  }

  ngOnInit() {
  }

}
