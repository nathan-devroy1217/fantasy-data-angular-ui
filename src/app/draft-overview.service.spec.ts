import { TestBed } from '@angular/core/testing';

import { DraftOverviewService } from './draft-overview.service';

describe('DraftOverviewService', () => {
  let service: DraftOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
