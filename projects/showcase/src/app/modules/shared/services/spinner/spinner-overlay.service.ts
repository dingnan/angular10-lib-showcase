import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
export class SpinnerOverlayService {
  constructor() {}

  public readonly loading$ = new BehaviorSubject<boolean>(false);
}
