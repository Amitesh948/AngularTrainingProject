import { Component , Output , EventEmitter } from '@angular/core';

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
 
  @Output() viewChanged = new EventEmitter<{view :string ,  user: any}>();
  
  onSubmit(view : string ) {
    const payload = {
      view: view,
      user: this.user
    };
   this.viewChanged.emit(payload);
  }
}
