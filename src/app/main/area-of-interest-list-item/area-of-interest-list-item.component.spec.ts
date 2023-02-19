import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfInterestListItemComponent } from './area-of-interest-list-item.component';

describe('AreaOfInterestListItemComponent', () => {
  let component: AreaOfInterestListItemComponent;
  let fixture: ComponentFixture<AreaOfInterestListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfInterestListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaOfInterestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
