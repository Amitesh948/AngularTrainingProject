import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts:any = [];
  async ngOnInit(): Promise<void> {
   
    await fetch("https://dummyjson.com/products")
    .then((res) => res.json()) // Parse the JSON response
    .then((data) => {
      this.posts = data;
      console.log(this.posts);
      
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
  
  }
}
