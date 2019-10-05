import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  constructor(  public dataserv: DataServiceService,
                public routes: Router
              ) { }
ngOnInit() {
}

public navTo(path: string) {
if ((path !== '') || (path === undefined)) {
this.routes.navigateByUrl(path);
}
}
}
