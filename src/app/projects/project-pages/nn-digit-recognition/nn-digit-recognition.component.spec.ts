import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnDigitRecognitionComponent } from './nn-digit-recognition.component';

describe('NnDigitRecognitionComponent', () => {
  let component: NnDigitRecognitionComponent;
  let fixture: ComponentFixture<NnDigitRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnDigitRecognitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NnDigitRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
