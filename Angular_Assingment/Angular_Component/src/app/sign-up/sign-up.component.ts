import { Component ,Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user={
    userName: '',
    userEmail: '',
    userPassword: ''
  }
  @Input() currentViews: string = '';
  @Output() viewChanged = new EventEmitter<string>();
  
  onSubmit(view : string ) {
   this.viewChanged.emit(view);
  }
}
