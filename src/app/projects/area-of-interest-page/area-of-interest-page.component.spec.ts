import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfInterestPageComponent } from './area-of-interest-page.component';

describe('AreaOfInterestPageComponent', () => {
  let component: AreaOfInterestPageComponent;
  let fixture: ComponentFixture<AreaOfInterestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfInterestPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaOfInterestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
