import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
