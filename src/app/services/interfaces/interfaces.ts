import { map, catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { DataServiceService } from '../data/data-service.service';


export interface IMenu {
    menuTitle: string;
    menuIcon?: string;
    menuLink?: string;
}


export interface UserDetails {
    _id: string;
    uid: string;
    name: string;
    exp: number;
    iat: number;
  }

export interface TokenResponse {
    token: string;
  }

export interface TokenPayload {
    uid: string;
    password: string;
    name?: string;
  }

@Injectable()
  export class AuthenticationService {
    private token: string;
    private serverUri: string;
    constructor(private http: HttpClient, private router: Router, private genInfo: DataServiceService) {}
    private saveToken(token: string): void {
      localStorage.setItem('serial-token', token);
      this.token = token;
    }

    private getToken(): string {
      if (!this.token) {
        this.token = localStorage.getItem('serial-token');
      }
      return this.token;
    }

    public getUserDetails(): UserDetails {
      const token = this.getToken();
      let payload;
      if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        return JSON.parse(payload);
      } else {
        return null;
      }
    }

    public isLoggedIn(): boolean {
      const user = this.getUserDetails();
      if (user) {
        return user.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }

    private request(method: 'post'|'get', type: 'test'|'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
      let base;
      this.serverUri = this.genInfo.getServerUri();

      if (method === 'post') {
        base = this.http.post(`${this.serverUri}/api/${type}`, user);
        // console.log(base);
      } else {
        // base = this.http.get(`${this.serverUri}/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        base = this.http.get(`${this.serverUri}/api/${type}`, { headers: { Authorization: `Token ${this.getToken()}` }});
        // console.log(base);
      }
      const request = base.pipe(
        map((data: TokenResponse) => {
          if (data.token) {
            this.saveToken(data.token);
          }
          console.log(data);
          return data;
        })
      );
      return request;
    }

    public register(user: TokenPayload): Observable<any> {
        // console.log('register done');
        return this.request('post', 'register', user);
    }

    public login(user: TokenPayload): Observable<any> {
      // console.log('logging in process in authentication service');
      return this.request('post', 'login', user);
    }

    public profile(): Observable<any> {
      return this.request('get', 'profile');
    }

    public logout(): void {
      this.token = '';
      window.localStorage.removeItem('serial-token');
      this.router.navigateByUrl('/');
    }
  }
