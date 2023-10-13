import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rows: any[] = [...Array(9).fill('')];

  constructor() {
    // console.log(this.rows);
  }

  ngOnInit(): void {}
}
