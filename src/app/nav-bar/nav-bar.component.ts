import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  inputValue: string;
  names: Array<string>;
  show: boolean;

  constructor() {
    this.inputValue = "Placeholder";
    this.show = true;
    this.names = ['Bar', 'Foo'];
   }

   toggleShow() {
     this.show = !this.show;
   }

}
