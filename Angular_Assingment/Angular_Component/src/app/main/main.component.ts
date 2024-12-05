import { Component, Input, OnChanges, SimpleChanges } from "@angular/core"

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  }
)

export class MainComponent implements OnChanges
{
 @Input() text: string = '';

 ngOnChanges(changes: SimpleChanges): void {
  
  console.log('name wasss:',this.text);   
}
}
