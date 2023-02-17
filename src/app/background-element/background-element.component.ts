import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-element',
  templateUrl: './background-element.component.html',
  styleUrls: ['./background-element.component.scss']
})
export class BackgroundElementComponent {
  value: string = Math.random() < 0.5 ? '0' : '1';
  xPos: number = randomNumber(0, window.innerWidth);
  delay: number = randomNumber(0, 10);
  fontSize: number = randomNumber(10, 30);
  duration: number = randomNumber(10, 20);
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
