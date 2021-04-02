import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  SignedIn$: Observable<boolean> = this.auth.UserSignedIn$.asObservable()

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  signin() {
    this.auth.SignIn()
  }

  signout() {
    this.auth.SignOut()
  }
}
