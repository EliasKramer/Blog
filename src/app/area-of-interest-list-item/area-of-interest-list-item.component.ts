import { Component, Input } from '@angular/core';
import { AreaOfInterest } from '../areas-of-interest/area-of-interest';

@Component({
  selector: 'app-area-of-interest-list-item',
  templateUrl: './area-of-interest-list-item.component.html',
  styleUrls: ['./area-of-interest-list-item.component.scss']
})
export class AreaOfInterestListItemComponent {
  @Input() areaOfInterest: AreaOfInterest;
}
