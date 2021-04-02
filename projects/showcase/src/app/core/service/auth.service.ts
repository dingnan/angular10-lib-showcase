import { Injectable } from '@angular/core'

// @Injectable({
//   providedIn: 'root',
// })
export class AuthService {
  private _signedIn: boolean

  constructor() {}

  IsUserSignedIn(): boolean {
    return !!this._signedIn
  }

  SignIn() {
    this._signedIn = true
  }

  SignOut() {
    this._signedIn = false
  }
}
