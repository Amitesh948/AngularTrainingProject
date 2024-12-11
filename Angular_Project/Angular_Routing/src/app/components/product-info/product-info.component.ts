import { Component,OnInit } from '@angular/core';
import { ApiCallingService } from 'src/app/services/api-calling.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{
  productDetails: any ;
  productId: string | null = null;

  constructor(private apiCallingService: ApiCallingService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.apiCallingService.getProducts(this.productId).subscribe(
        (product) => {
          this.productDetails = product;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }
}

