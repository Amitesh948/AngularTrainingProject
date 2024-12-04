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
  userData : object | null =null;
  signUP: any="";

  constructor(){
    
  }

  pageHasBeenChanged(page: string) {
    this.currentPage = page;
  }
  viewHasBeenChanged(view : string) {
   this.currentview=view;
   
    }
    
}
