import { TestBed } from '@angular/core/testing';

import { GetDataByApiService } from './get-data-by-api.service';

describe('GetDataByApiService', () => {
  let service: GetDataByApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataByApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
