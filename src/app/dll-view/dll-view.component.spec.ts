import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DllViewComponent } from './dll-view.component';

describe('DllViewComponent', () => {
  let component: DllViewComponent;
  let fixture: ComponentFixture<DllViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DllViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DllViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
