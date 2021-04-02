import { Component, OnInit } from '@angular/core'
import { AuthService } from 'projects/showcase/src/app/core/service/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
