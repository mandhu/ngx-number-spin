import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumberSpinComponent } from './ngx-number-spin.component';

describe('NgxNumberSpinComponent', () => {
  let component: NgxNumberSpinComponent;
  let fixture: ComponentFixture<NgxNumberSpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNumberSpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumberSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
