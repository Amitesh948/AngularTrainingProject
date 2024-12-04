import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  show = true;
  subHeader: string = "by HTML5 UP"
  home: string = "Home"
  dropdown: string = "Dropdown"
  left_Sidebar: string = "Left Sidebar"
  right_Sidebar: string = "Right Sidebar"
  two_Sidebar: string = "Two Sidebar"
  no_Sidebar: string = "No Sidebar"

  
  @Input() currentPages: string = '';
  @Output() pageChanged = new EventEmitter<string>();

  constructor(){  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentPages);
  }

  ngOnInit(): void {  }

  changePage(page: string) {
    this.currentPages = page;
    this.pageChanged.emit(page);
  }
}
