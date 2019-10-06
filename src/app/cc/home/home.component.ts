import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number;
  interval;

  constructor(public dataserv: DataServiceService,
              public routes: Router
              ) {
                this.counter = 5;
              }
  ngOnInit() {
  }

  public navTo(path: string) {
    if ((path !== '') || (path === undefined)) {
      this.routes.navigateByUrl(path);
    }
  }

  public reverseCount(startsFrom: number = 5, endsTo: number = 0) {
    this.counter = startsFrom;
  }

  public countDown(startsFrom: number = 5, endsTo: number = 0) {
    this.counter = startsFrom;
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        this.navTo('login');
      }
    }, 1000);
  }

  public stopCountingDown() {
    this.counter = 5;
    clearInterval(this.interval);
  }
}
