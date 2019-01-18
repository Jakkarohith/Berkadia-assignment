import { TestBed } from '@angular/core/testing';

import { FetchjokedataService } from './fetchjokedata.service';

describe('FetchjokedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchjokedataService = TestBed.get(FetchjokedataService);
    expect(service).toBeTruthy();
  });
});
