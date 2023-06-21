import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top of the page on route change
        window.scrollTo(0, 0);
      }
    });
  }

  isLoginOrRegistrationRoute(): boolean {
    return this.router.url.includes('/login') || this.router.url.includes('/registration');
  }
}
