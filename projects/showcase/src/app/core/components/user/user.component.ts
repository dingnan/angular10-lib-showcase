import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  get SignedIn(): boolean {
    return this.auth.IsUserSignedIn()
  }

  signin() {
    this.auth.SignIn()
  }

  signout() {
    this.auth.SignOut()
  }
}
