import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaOfInterest } from 'src/app/data/areas-of-interest/area-of-interest';
import { AreasOfInterestService } from 'src/app/data/areas-of-interest/areas-of-interest.service';

@Component({
  selector: 'app-area-of-interest-page',
  templateUrl: './area-of-interest-page.component.html',
  styleUrls: ['./area-of-interest-page.component.scss']
})
export class AreaOfInterestPageComponent implements OnInit {
  areaOfInterest: AreaOfInterest;

  constructor(
    private route: ActivatedRoute, 
    private areaOfInterestService: AreasOfInterestService) 
    {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id == null)
    {
      throw new Error("id is null");
    }
    const aoiForLink = this.areaOfInterestService.getAreaOfInterestWithLink(id);
    if(aoiForLink == null)
    {
      throw new Error("aoiForLink is null");
    }
    this.areaOfInterest = aoiForLink;
  }
}
