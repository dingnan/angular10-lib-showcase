import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss'],
})
export class FlexDemoComponent implements OnInit {
  public numberOfTiles = 5;

  constructor() {}

  ngOnInit(): void {}
}
