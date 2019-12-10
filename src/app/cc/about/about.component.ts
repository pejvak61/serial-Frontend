import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/interfaces/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(auth: AuthenticationService) {
    // console.log(auth.getUser());
  }

  ngOnInit() {
  }

}
