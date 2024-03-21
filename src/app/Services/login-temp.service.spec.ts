import { TestBed } from '@angular/core/testing';

import { LoginTempService } from './login-temp.service';

describe('LoginTempService', () => {
  let service: LoginTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
