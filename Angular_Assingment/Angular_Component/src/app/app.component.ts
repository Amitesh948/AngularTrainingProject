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
  userName: string ='';
  userEmail: string ='';
  userPassword: string ='';

  pageHasBeenChanged(page: string) {
    this.currentPage = page;
  }
  viewHasBeenChanged(event: { view: string; user: any }) {
   this.currentview=event.view;  
   this.userName=event.user.userName;
   this.userEmail=event.user.userEmail;
   this.userPassword=event.user.userPassword;
   console.log('User Emailsss:', this.userEmail);
   console.log('User Passwordss:', this.userPassword);
   console.log('User Name is :', this.userName);
  }
  
  webHasBeenAccessed(event: { userEmail: string; userPass: string; viewData: string }) {
    this.currentview= event.viewData;
    this.userEmail=event.userEmail;
    this.userPassword=event.userPass;
    console.log('User Email:', this.userEmail);
    console.log('User Password:', this.userPassword);
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      console.log("app component loaded");
      
    }
}
