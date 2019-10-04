import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  menuItems: IMenu[] = [
    {menuTitle: 'Home', menuIcon: 'home'},
    {menuTitle: 'about', menuIcon: 'blur_on', menuLink: 'about'},
    {menuTitle: 'read-serial-data', menuIcon: 'chrome_reader_mode', menuLink: 'serialRead'},
  ];
  constructor() { }
}
