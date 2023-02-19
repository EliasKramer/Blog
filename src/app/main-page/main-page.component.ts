import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AreasOfInterestService } from '../areas-of-interest/areas-of-interest.service';
import { AreaOfInterest } from '../areas-of-interest/area-of-interest';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  areasOfInterest: AreaOfInterest[];
  lastHovered: number = -1;
  terminalStrings: string[] = [];
  numberOfTerminalStrings: number = 5;
  next = 0;
  terminalInput: string = "";
  @ViewChild('terminalInputElement') terminalInputElement: ElementRef<HTMLInputElement>;

  ngOnInit() {
    //new terminal array size of 5 with items initialized to 0
    this.terminalStrings = new Array(this.numberOfTerminalStrings).fill("");
  }

  constructor(public givenAreasOfInterest: AreasOfInterestService) 
  { 
    this.areasOfInterest = givenAreasOfInterest.getAreasOfInterest();
  }


  onMouseEntereAOI(idx: number){
    if(this.lastHovered != idx)
    {
      this.terminalStrings[this.next] = ("> " + this.areasOfInterest[idx].description);
      this.manageNewTerminalLine();
      this.lastHovered = this.next - 1;
    }
  }

  onEnterTerminalInput(){
    this.terminalStrings[this.next] = ("> " + this.terminalInput);
    this.manageNewTerminalLine();
    this.terminalInput = "";
  }

  manageNewTerminalLine()
  {
    this.next++;
    if(this.next >= this.numberOfTerminalStrings)
    {
      this.next = this.numberOfTerminalStrings - 1;
      this.terminalStrings.shift();
    }
  }
  onTerminalClickInput() {
    const inputElement = this.terminalInputElement.nativeElement;
    inputElement.focus();
    console.log("clicking over other element");
  }
}