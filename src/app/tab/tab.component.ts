import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  symbol: string = 'X';
  @Input('row') row: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.symbol = this.symbol ? 'O' : 'X';
    console.log(this.symbol);
  }

  onButtonClick() {
    this.row = this.symbol;
    console.log('row:', this.row);
  }
}
