import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name: string = 'Login';
  username: any;

  constructor(private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem("userdata") || "");
    this.username = userData.username;
  }

  sendToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
