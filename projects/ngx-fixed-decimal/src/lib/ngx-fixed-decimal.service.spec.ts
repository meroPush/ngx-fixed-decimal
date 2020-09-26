import { TestBed } from '@angular/core/testing';

import { NgxFixedDecimalService } from './ngx-fixed-decimal.service';

describe('NgxFixedDecimalService', () => {
  let service: NgxFixedDecimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFixedDecimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
