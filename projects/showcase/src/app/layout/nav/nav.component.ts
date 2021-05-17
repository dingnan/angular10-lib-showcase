import { Component, OnDestroy } from '@angular/core'
import { NavigationEnd, Router, RouterEvent } from '@angular/router'
import { Subject } from 'rxjs'
import { filter, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnDestroy {
  navLinks = [
    {
      label: 'Home',
      path: '/',
      index: 0,
    },
    {
      label: 'Alert Lib',
      path: '/alert',
      index: 1,
    },
    {
      label: 'Flex layout',
      path: '/flex',
      index: 2,
    },
    {
      label: 'To do',
      path: '/todo',
      index: 3,
    },
    {
      label: 'Checkout',
      path: '/checkout',
      index: 4,
    },
  ]

  activeLink = this.navLinks[0]

  destroy$ = new Subject<any>()

  constructor(private router: Router) {
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((val: RouterEvent) => {
        if (val) {
          const link = this.navLinks.find(n => n.path === val.url)
          if (link) {
            this.activeLink = link;
          }
        }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
