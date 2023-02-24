import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBasedChessComponent } from './array-based-chess.component';

describe('ArrayBasedChessComponent', () => {
  let component: ArrayBasedChessComponent;
  let fixture: ComponentFixture<ArrayBasedChessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayBasedChessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayBasedChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
