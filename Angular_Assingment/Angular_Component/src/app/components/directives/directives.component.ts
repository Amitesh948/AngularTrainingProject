import { Component } from "@angular/core";

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html'
}
)

export  class DirectivesComponent{
user = ['Anil' , 'Ayush', 'Amitesh'];
selectedUser: string = "Hello"; 


testing() {
    
}
}