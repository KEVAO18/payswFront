import { TestBed } from '@angular/core/testing';

import { CreateDataByApiService } from './create-data-by-api.service';

describe('CreateDataByApiService', () => {
  let service: CreateDataByApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDataByApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
