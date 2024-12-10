import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { ApiCallingService } from 'src/app/services/api-calling.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  storedData: any;
  displayedShop: any = [];

  constructor(private apiCallingService: ApiCallingService , private router : Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);

        if (event.url === '/') {
          this.displayedShop = this.storedData.slice(0, 8);
        } else if (event.url === '/shop') {
          this.displayedShop = this.storedData;
        }
      }
    });
  }

  ngOnInit(): void {
    const apiUrl = 'https://fakestoreapi.com/products'; 
    this.apiCallingService.fetchData(apiUrl);  
    this.storedData = this.apiCallingService.getData();
    console.log('Stored Data in Component:', this.storedData);

    if (this.router.url === '/') {
      this.displayedShop = this.storedData.slice(0, 8);
    } else if (this.router.url === '/shop') {
      this.displayedShop = this.storedData;
    }
  }

 

}



