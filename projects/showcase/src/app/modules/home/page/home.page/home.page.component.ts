import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'projects/showcase/src/app/core/services/auth/auth.service'
//import { AUTH_TOKEN } from 'projects/showcase/src/app/core/constants/auth.config'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
  host: { class: 'grey' }
})
export class HomePageComponent implements OnInit {
  SignedIn$: Observable<boolean> = this.auth.UserSignedIn$.asObservable()

  constructor(private auth: AuthService) {} //, private AUTH_TOKEN

  ngOnInit(): void {
    //  console.log('HomePageComponent: ', this.AUTH_TOKEN)
  }
}
