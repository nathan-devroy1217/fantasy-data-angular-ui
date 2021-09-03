import { TestBed } from '@angular/core/testing';

import { DraftDetailServiceService } from './draft-detail-service.service';

describe('DraftDetailServiceService', () => {
  let service: DraftDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
