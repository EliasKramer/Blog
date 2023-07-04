import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/data/areas-of-interest/project';
import { TerminalComponent } from 'src/app/main/terminal/terminal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() idx: number;

  delay: number;

  ngOnInit(): void {
      this.delay = this.idx * 0.1;
  }
}
