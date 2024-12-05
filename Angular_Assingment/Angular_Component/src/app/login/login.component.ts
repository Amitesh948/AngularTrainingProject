import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges {

  logEmail : string = '';
  logPass  : string = '';
  @Input() signUpEmail: string = '';
  @Input() signUpPassword: string = '';
  @Output() logIN = new EventEmitter<{userEmail: string , userPass: string , viewData: string }>();


  logName() {
    console.log('First Email:', this.logEmail);
    console.log('First Pass', this.logPass);
    this.logEmail=this.logEmail;
    this.logPass=this.logPass;
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.signUpEmail=this.signUpEmail;
      this.signUpPassword=this.signUpPassword;
      console.log('signUpEmail updated:', this.signUpEmail);
      console.log('signUpPassword updated:',this.signUpPassword);   
  }

  onAccess(viewData: string) {
    
    if(this.logEmail === this.signUpEmail && this.logPass === this.signUpPassword)
      {
        const data={
          userEmail: this.logEmail,
          userPass : this.logPass,
          viewData: viewData
        };
        this.logIN.emit(data);
      }
      else if(this.logEmail != this.signUpEmail)
        {
          alert("Email is incorrect");
        }
      else{
        alert("Password is incorrect");
      }   
    }
  }

