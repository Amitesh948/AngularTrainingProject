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

  @Input() item = "Hello";
  @Input() currentPage: string = '';
  @Output() pageChanged = new EventEmitter<string>();

  constructor(){  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentPage);
  }

  ngOnInit(): void {  }

  changePage(page: string) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }
}
