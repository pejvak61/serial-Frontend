import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/interfaces/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public logged_user: string;
  constructor(private auth: AuthenticationService) {
    this.logged_user = auth.getUser();
  }

  public logout(){
    this.auth.logout()
  }
  ngOnInit() {
  }

}
