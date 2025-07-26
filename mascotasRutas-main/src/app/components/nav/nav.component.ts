import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faUser, faShoppingCart, faDog, faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  imports: [FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  faUser= faUser;
  faShoppingCart=faShoppingCart;
  faCat=faCat;
  faDog=faDog;

}
