import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginFormVisible: boolean = false; 

username : string= '';  
useremail: string='';
userpass : string='';

@Output() loginDetails = new EventEmitter<any>();

pushValuesInObject(user: any) {
  this.isLoginFormVisible = true;

  this.username=user.username;
  this.useremail=user.mail;
  this.userpass=user.password;

}

logValues(user: any) {
  if(this.useremail== user.email && this.userpass==user.pass)
    {
      this.loginDetails.emit(this.username);
    }
    else{
      alert("invalid credentials")
    }
}

  toggleForm(): void {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }
}
