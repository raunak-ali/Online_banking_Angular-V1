import { TestBed } from '@angular/core/testing';

import { PaypeeService } from './paypee.service';

describe('PaypeeService', () => {
  let service: PaypeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
