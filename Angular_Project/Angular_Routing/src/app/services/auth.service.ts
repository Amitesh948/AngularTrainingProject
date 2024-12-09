import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata:any;
  constructor() { }

  getData(user:any) {
    this.userdata = user;
    console.log(this.userdata);
    
  }
}
