import { Injectable } from '@angular/core';
import { AreaOfInterest } from './area-of-interest';

@Injectable({
  providedIn: 'root'
})
export class AreasOfInterestService {
  areasOfInterest: AreaOfInterest[] = [
    new AreaOfInterest(
      'Title 1',
      'Description 1',
      'https://via.placeholder.com/150',
      'Image 1',
      '/area-of-interest-1'
    ),
    new AreaOfInterest(
      'Title 2',
      'Description 2',
      'https://via.placeholder.com/150',
      'Image 2',
      '/area-of-interest-2'
    ),
  ];

  constructor() { }
  
  getAreasOfInterest(): AreaOfInterest[]{
    return this.areasOfInterest;
  }
}
