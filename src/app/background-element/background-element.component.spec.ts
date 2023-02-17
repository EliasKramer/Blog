import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundElementComponent } from './background-element.component';

describe('BackgroundElementComponent', () => {
  let component: BackgroundElementComponent;
  let fixture: ComponentFixture<BackgroundElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
