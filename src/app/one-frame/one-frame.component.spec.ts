import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFrameComponent } from './one-frame.component';

describe('OneFrameComponent', () => {
  let component: OneFrameComponent;
  let fixture: ComponentFixture<OneFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
