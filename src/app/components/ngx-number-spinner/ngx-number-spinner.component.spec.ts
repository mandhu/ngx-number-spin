import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxNumberSpinnerComponent } from './ngx-number-spinner.component';

describe('NgxNumberSpinnerComponent', () => {
  let component: NgxNumberSpinnerComponent;
  let fixture: ComponentFixture<NgxNumberSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNumberSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumberSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
