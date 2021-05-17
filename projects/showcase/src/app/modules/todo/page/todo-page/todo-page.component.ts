import { Component, OnInit } from '@angular/core'
import { AuthService } from 'projects/showcase/src/app/core/services/auth/auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  SignedIn$: Observable<boolean> = this.auth.UserSignedIn$.asObservable()

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
