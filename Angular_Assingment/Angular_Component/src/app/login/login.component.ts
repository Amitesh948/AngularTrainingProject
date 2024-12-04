import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logEmail : string = '';
  logPass  : string = '';
  @Input() signUpEmail: string = '';
  @Input() signUpPassword: string = '';
  @Output() logIN = new EventEmitter<{userEmail: string , userPass: string , viewData: string }>();

  constructor(){
    console.log('User Email:', this.signUpEmail);
  }
  onAccess(viewData: string) {
    const data={
      userEmail: this.logEmail,
      userPass :this.logPass,
      viewData: viewData
    };
    this.logIN.emit(data);
    }

  }

