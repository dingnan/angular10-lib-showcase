import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app'
  navLinks: any[]
  activeLinkIndex = -1

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/',
        index: 0,
      },
      {
        label: 'Alert Lib',
        link: './alert',
        index: 1,
      },
      {
        label: 'Flex layout',
        link: './flex',
        index: 2,
      },
      {
        label: 'To do',
        link: './todo',
        index: 3,
      },
    ]
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url),
      )
    })
  }
}
