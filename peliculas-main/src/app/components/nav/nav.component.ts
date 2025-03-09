import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [ ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  contactUs:boolean=false;

  showInfo():void{
    this.contactUs= true;
  }
  fnClosePopUp():void{
    this.contactUs=false;
  }

}
