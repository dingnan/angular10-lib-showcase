import { Component, OnInit } from '@angular/core'
import { AuthService } from 'projects/showcase/src/app/core/service/auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomePageComponent implements OnInit {
  SignedIn$: Observable<boolean> = this.auth.UserSignedIn$.asObservable()

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
