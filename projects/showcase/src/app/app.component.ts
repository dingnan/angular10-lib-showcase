import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app'
  navLinks = [
    {
      label: 'Home',
      path: './',
      index: 0,
    },
    {
      label: 'Alert Lib',
      path: './alert',
      index: 1,
    },
    {
      label: 'Flex layout',
      path: './flex',
      index: 2,
    },
    {
      label: 'To do',
      path: './todo',
      index: 3,
    },
  ]
  activeLink = this.navLinks[0]

  constructor(private router: Router) {}
}
