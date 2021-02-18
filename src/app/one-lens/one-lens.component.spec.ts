import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLensComponent } from './one-lens.component';

describe('OneLensComponent', () => {
  let component: OneLensComponent;
  let fixture: ComponentFixture<OneLensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
