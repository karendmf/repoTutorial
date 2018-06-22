import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styles: []
})
/* export class AppNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */
export class AppNavbarComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}