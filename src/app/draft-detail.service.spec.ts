import { TestBed } from '@angular/core/testing';

import { DraftDetailService } from './draft-detail.service';

describe('DraftDetailService', () => {
  let service: DraftDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
