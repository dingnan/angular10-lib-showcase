import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.scss'],
})
export class FlexPageComponent implements OnInit {
  title: string = 'tile'
  numberOfTiles: number = 6

  constructor() {}

  ngOnInit(): void {}
}
