import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

// @Injectable({
//   providedIn: 'root',
// })
export class AuthService {
  private _signedIn: boolean

  UserSignedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() {}

  IsUserSignedIn(): boolean {
    return !!this._signedIn
  }

  SignIn() {
    this._signedIn = true
    this.UserSignedIn$.next(true)
  }

  SignOut() {
    this._signedIn = false
    this.UserSignedIn$.next(false)
  }
}
