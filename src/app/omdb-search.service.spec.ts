import { TestBed, inject } from '@angular/core/testing';

import { OmdbSearchService } from './omdb-search.service';

describe('OmdbSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbSearchService]
    });
  });

  it('should be created', inject([OmdbSearchService], (service: OmdbSearchService) => {
    expect(service).toBeTruthy();
  }));
});
