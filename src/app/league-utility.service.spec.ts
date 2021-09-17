import { TestBed } from '@angular/core/testing';

import { LeagueUtilityService } from './league-utility.service';

describe('LeagueUtilityService', () => {
  let service: LeagueUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
