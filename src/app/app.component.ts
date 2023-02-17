import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrLength: number = Math.floor(window.innerWidth / 100);
  arr: Array<number> = new Array(this.arrLength).fill(0);
  title = 'Blog';
}