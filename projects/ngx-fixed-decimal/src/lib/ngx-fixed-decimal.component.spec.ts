import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFixedDecimalComponent } from './ngx-fixed-decimal.component';

describe('NgxFixedDecimalComponent', () => {
  let component: NgxFixedDecimalComponent;
  let fixture: ComponentFixture<NgxFixedDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFixedDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFixedDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
