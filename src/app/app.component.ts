import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (public router: Router) {}
  
  title = 'Widget Editor';
  
  navlinks = [
    'Widget Design',
    'Slots Settings',
    'OSR Slot Design',
    'AD Slot Design'
  ];

  navClicked (event) {
    this.router.navigateByUrl('/'+event.target.innerText.toLowerCase().replace(/\s/g, '-'));
  } 
}
