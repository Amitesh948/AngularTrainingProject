import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  private data: any = {}; 
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  fetchData(): void {
    this.http.get(this.apiUrl).subscribe(
      (response) => {
        this.data = response; 
        console.log('Data fetched and stored:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
 
  getProducts(productId: string): Observable<any[]> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(url);
  }
  
  getData(): any {
    return this.data;
  }
}
