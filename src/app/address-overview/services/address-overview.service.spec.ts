import { TestBed } from '@angular/core/testing';

import { AddressOverviewService } from './address-overview.service';

describe('AddressOverviewService', () => {
  let service: AddressOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
