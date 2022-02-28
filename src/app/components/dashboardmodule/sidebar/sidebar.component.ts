import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidenavWidth = 6;
  ngStyle: string;
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 6;
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.clear();
  }

}
