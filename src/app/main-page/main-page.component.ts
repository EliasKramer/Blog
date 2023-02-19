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
  terminalStrings: string[] = [];
  numberOfInputsInTermianl: number = 5;
  numberOfTerminalStrings: number = this.numberOfInputsInTermianl * 2;
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
      this.terminalProcessInput("get " + this.areasOfInterest[idx].title);
  }

  onEnterTerminalInput(){
    this.terminalProcessInput(this.terminalInput);
    this.terminalInput = "";
  }

  terminalProcessInput(input: string){
    this.pushNewLine("> " + input);
    this.pushNewLine(this.terminalGetRepsonse(input));
  }

  terminalGetRepsonse(input: string): string{
    let areaOfInterestInput = this.areasOfInterest.find(aoi => "get " + aoi.title === input);
    if(areaOfInterestInput != null)
    {
      return areaOfInterestInput.description;
    }
    return "echo " + input;
  }

  pushNewLine(line: string){
    if(this.terminalStrings.length >= this.numberOfTerminalStrings)
    {
      this.next = this.numberOfTerminalStrings - 1;
      //shift, but add an element to the end
      this.terminalStrings.push(line);
      this.terminalStrings.shift();
    }
    else
    {
      this.terminalStrings.push(line);
      this.next++;
    }
  }

  onTerminalClickInput() {
    const inputElement = this.terminalInputElement.nativeElement;
    inputElement.focus();
    console.log("clicking over other element");
  }
}