import { TestBed } from '@angular/core/testing';

import { WikipediaserService } from './wikipediaser.service';

describe('WikipediaserService', () => {
  let service: WikipediaserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipediaserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
