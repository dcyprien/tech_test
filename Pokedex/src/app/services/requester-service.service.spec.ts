import { TestBed } from '@angular/core/testing';

import { RequesterServiceService } from './requester-service.service';

describe('RequesterServiceService', () => {
  let service: RequesterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
