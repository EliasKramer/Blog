import { Component } from '@angular/core';
import { AreasOfInterestService } from '../areas-of-interest/areas-of-interest.service';
import { AreaOfInterest } from '../areas-of-interest/area-of-interest';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  areasOfInterest: AreaOfInterest[];
  constructor(
    public givenAreasOfInterest: AreasOfInterestService) 
    { 
      this.areasOfInterest = givenAreasOfInterest.getAreasOfInterest();
    }
}
