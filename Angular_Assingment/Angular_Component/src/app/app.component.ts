import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular_Component';
  no_Sidebar: string = "No Sidebar"
  currentPage: any = "home";

  pageHasBeenChanged(page: string) {
    this.currentPage = page;
  }
}
