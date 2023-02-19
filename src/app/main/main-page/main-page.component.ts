import { Component, ViewChild } from '@angular/core';
import { AreasOfInterestService } from '../areas-of-interest/areas-of-interest.service';
import { AreaOfInterest } from '../areas-of-interest/area-of-interest';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  areasOfInterest: AreaOfInterest[];
  @ViewChild('terminal') terminalElement: TerminalComponent;

  constructor(public givenAreasOfInterest: AreasOfInterestService) 
  { 
    this.areasOfInterest = givenAreasOfInterest.getAreasOfInterest();
  }

  onMouseEntereAOI(idx: number){
    this.terminalElement.enterOutsideInput(
      "get " + 
      this.areasOfInterest[idx].title.replace(" ", "") + 
      " description");
  }
}