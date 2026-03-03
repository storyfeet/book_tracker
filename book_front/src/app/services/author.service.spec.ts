import { TestBed } from '@angular/core/testing';

import { ContributorService } from './contributor.service';

describe('AuthorService', () => {
  let service: ContributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
