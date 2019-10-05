import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { SharedENum } from 'src/app/services/enum/sharedenum.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    uid: '',
    password: ''
  };

  hide: boolean;
  status: string;
  isOpen = true;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    public genInfo: DataServiceService,
    private titleService: Title) {
      genInfo.setPageTitle('Login');
      this.titleService.setTitle( genInfo.getPageTitle() );
      this.status = SharedENum.Guest;
      this.hide = true;
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.status = SharedENum.Logged_In;
      this.router.navigateByUrl('/measurement');
    }, (err) => {
      this.status = err.error.message;
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }
}
