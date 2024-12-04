import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular_Component';
  currentPage: any = "home";
  currentview: any ='signup';
  userEmail: string='123455535335';
  userPassword: string='';

  pageHasBeenChanged(page: string) {
    this.currentPage = page;
  }
  viewHasBeenChanged(event: { view: string; user: any }) {
   this.currentview=event.view;  
   this.userEmail=event.user.userEmail;
   this.userPassword=event.user.userPassword;
   console.log('User Email:', this.userEmail);
   console.log('User Password:', this.userPassword);
  }
  
  webHasBeenAccessed(event: { userEmail: string; userPass: string; viewData: string }) {
    this.currentview= event.viewData;
    console.log('User Email:', this.userEmail);
    console.log('User Password:', this.userPassword);
    }
}
