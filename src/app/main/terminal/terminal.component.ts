import { Component, ViewChild, ElementRef} from '@angular/core';
import { AreaOfInterest } from '../areas-of-interest/area-of-interest';
import { AreasOfInterestService } from '../areas-of-interest/areas-of-interest.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  areasOfInterest: AreaOfInterest[];
  terminalStrings: string[] = [];
  currentTerminalResponse: string = "";
  writingAnswer: boolean = false;
  numberOfInputsInTermianl: number = 5;
  numberOfTerminalStrings: number = this.numberOfInputsInTermianl * 2;
  terminalInput: string = "";
  terminalResponses: Map<string, string> = new Map<string, string>();

  @ViewChild('terminalInputElement') terminalInputElement: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.initTerminalResponses();
  }

  constructor(public givenAreasOfInterest: AreasOfInterestService) 
  { 
    this.areasOfInterest = givenAreasOfInterest.getAreasOfInterest();
  }

  initTerminalResponses(){
    this.initAOIResponses();
    this.terminalResponses.set("help", "i cannot help you");
  }

  initAOIResponses(){
    for(let i = 0; i < this.areasOfInterest.length; i++)
    {
      this.terminalResponses.set(
        "get " + this.areasOfInterest[i].title.replace(" ", "") + " description",
        this.areasOfInterest[i].description);

      this.terminalResponses.set(
        "get " + this.areasOfInterest[i].title.replace(" ", "") + " title",
        this.areasOfInterest[i].title);
      
      this.terminalResponses.set(
        "get " + this.areasOfInterest[i].title.replace(" ", "") + " link",
        this.areasOfInterest[i].routerLink);
      
      this.terminalResponses.set(
        "get " + this.areasOfInterest[i].title.replace(" ", "") + " image",
        this.areasOfInterest[i].imageAlt);
    }
  }
  //this should be called by other components
  public enterOutsideInput(input: string){
    if(this.writingAnswer == false)
    {
      this.terminalProcessInput(input);
    }
  }

  onEnterTerminalInput(){
    if(this.writingAnswer == false)
    {
      this.terminalProcessInput(this.terminalInput);
      this.terminalInput = "";
    }
  }

  terminalProcessInput(input: string){
    this.pushNewLine("> " + input);
    this.currentTerminalResponse = this.terminalGetRepsonse(input);
    this.writeSlowTerminalResponse();
  }

  writeSlowTerminalResponse(){
    const idxOfLine = this.pushNewLine("");
    this.writingAnswer = true;
    let i = 0;
    const speed = 50;
    const intervalId = setInterval(() => {
      if (i < this.currentTerminalResponse.length) {
        this.terminalStrings[idxOfLine] += this.currentTerminalResponse.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
        this.writingAnswer = false;
      }
    }, speed);
  }

  terminalGetRepsonse(input: string): string{
    let responses = this.terminalResponses.get(input);
    if(responses != undefined)
    {
      console.log("found command " + input + " with response " + responses + "");
      return responses;
    }
    else{
      console.log("command " + input + " not found");
      return "command not found";
    }
  }

  //returns the index of the new line
  pushNewLine(line: string): number{
    let newLength = this.terminalStrings.push(line);
    if(newLength > this.numberOfTerminalStrings)
    {
      this.terminalStrings.shift();
      newLength--;
    }

    return newLength-1;
  }

  onTerminalClickInput() {
    const inputElement = this.terminalInputElement.nativeElement;
    inputElement.focus();
    console.log("clicking over other element");
  }
}
