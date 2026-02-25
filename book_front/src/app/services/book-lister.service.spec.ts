import { TestBed } from '@angular/core/testing';

import { BookListerService } from './book-lister.service';

describe('BookListerService', () => {
  let service: BookListerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
