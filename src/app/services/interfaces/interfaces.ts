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
    user: string;
  }

export interface TokenPayload {
    uid: string;
    password: string;
    name?: string;
  }

@Injectable()
  export class AuthenticationService {
    private token: string;
    private user: string;
    private serverUri: string;
    constructor(private http: HttpClient, private router: Router, private genInfo: DataServiceService) {}
    
    private saveToken(token: string, user: string): void {
      localStorage.setItem('serial-token', token);
      localStorage.setItem('serial-user', user);
      // console.log(user,token)
      this.token = token;
      this.user = user;
    }

    private getToken(): string {
      if (!this.token) {
        this.token = localStorage.getItem('serial-token');
      }
      return this.token;
    }

    // public getUserDetails(): UserDetails {
    // public getUserDetails(): any {
    //   const token = this.getToken();
    //   let payload;
    //   if (token) {
    //     payload = token.split('.')[1];
    //     payload = window.atob(payload);
    //     return JSON.parse(payload);
    //   } else {
    //     return null;
    //   }
    // }

    public getUser(): string {
      if (!this.user) {
        this.user = localStorage.getItem('serial-user');
      }
      return this.user;
    }

    // public isLoggedIn(): boolean {
    //   const user = this.getUserDetails();
    //   if (user) {
    //     return user.exp > Date.now() / 1000;
    //   } else {
    //     return false;
    //   }
    // }

    public isLoggedIn(): boolean {
      const user = this.getUser();
      if (user) {
        return true;
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
          console.log({'data' : data});
          if (data.token) {
            this.saveToken(data.token, data.user);
          }
          return data;
        })
      );
      return request;
    }

    public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
    }

    public login(user: TokenPayload): Observable<any> {
      return this.request('post', 'login', user);
    }

    public profile(): Observable<any> {
      return this.request('get', 'profile');
    }

    public logout(): void {
      this.token = '';
      this.user = '';
      window.localStorage.removeItem('serial-token');
      window.localStorage.removeItem('serial-user');
      console.log('local storage emptied');
      this.router.navigateByUrl('/login');
    }
  }
