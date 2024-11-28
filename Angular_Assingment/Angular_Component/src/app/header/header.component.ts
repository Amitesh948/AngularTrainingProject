import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
header : string = "Arcana"
subHeader : string = "by HTML5 UP"
home : string = "Home"
dropdown : string ="Dropdown"
left_Sidebar : string = "Left Sidebar"
right_Sidebar : string = "Right Sidebar"
two_Sidebar : string = "Two Sidebar"

@Input() item = "Hello";

}
