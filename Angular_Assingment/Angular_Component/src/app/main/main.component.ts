import { Component } from "@angular/core"

@Component({
    selector: 'app-main',
    template: `
    <h1>Two-Way Binding without ngModel</h1>
    <input [value]="text" (input)="onInputChange($event)" />
    <p>Current Value: {{ text }}</p>
  ` ,
  styles: [`
  h1 {
    text-align: center;
  }
  input {
    display: block;
    margin: 0 auto;
    padding: 10px;
    font-size: 16px;
  }
  p {
    text-align: center;
    font-size: 18px;
  }
`]
}
)

export class MainComponent
{
    text: string = '';

    onInputChange(event: any) {
      this.text = event.target.value;
}
}