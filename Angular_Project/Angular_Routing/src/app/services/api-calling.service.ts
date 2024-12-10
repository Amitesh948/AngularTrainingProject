import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  private data: any = {}; 

  constructor(private http: HttpClient) {}

  fetchData(apiUrl: string): void {
    this.http.get(apiUrl).subscribe(
      (response) => {
        this.data = response; 
        console.log('Data fetched and stored:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  
  getData(): any {
    return this.data;
  }
}
