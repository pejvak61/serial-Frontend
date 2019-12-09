import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private AppTitle: string;
  private PageTitle: string;
  public Description: string;
  private serverUri: string;
  menuItems: IMenu[] = [
    {menuTitle: 'Home', menuIcon: 'home'},
    {menuTitle: 'about', menuIcon: 'blur_on', menuLink: 'about'},
    {menuTitle: 'read-serial-data', menuIcon: 'chrome_reader_mode', menuLink: 'serialRead'},
    {menuTitle: 'read-serial-data', menuIcon: 'chrome_reader_mode', menuLink: 'serialRead'},
  ];
  constructor() {
    this.AppTitle = 'Serial Read';
    this.PageTitle = 'Home page';
    this.Description = 'This fits application';
    // this.serverUri = 'http://localhost:2281'; // localhost
    // this.serverUri = 'http://127.0.0.1:2281'; // localhost
    this.serverUri = 'http://192.168.210.20:2281'; // Remote
    // this.serverUri = 'http://192.168.1.171:3000'; // Internal network
    // this.serverUri = 'http://192.168.210.236:3000'; // Internal network
  }

  public setPageTitle(title: string) {
    this.PageTitle = title;
  }
  public getPageTitle(): string {
      return (this.AppTitle + ' :: ' + this.PageTitle);
  }
  public getServerUri(): string {
    return this.serverUri;
  }
  public setCollections() {
    // let a = new GarmentDataX();
    // console.log(Object.getOwnPropertyNames(a));
    // console.log(Object.keys(a));
  }
}
