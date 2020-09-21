import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss'],
})
export class FlexDemoComponent implements OnInit {
  title: string = 'tile';
  numberOfTiles: number = 6;

  constructor() {}

  ngOnInit(): void {}
}
