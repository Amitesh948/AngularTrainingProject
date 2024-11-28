import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  text: string = '';

  onInputChange(event: any) {
    this.text = event.target.value;
}
}
