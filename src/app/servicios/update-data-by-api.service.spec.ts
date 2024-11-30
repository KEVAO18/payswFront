import { TestBed } from '@angular/core/testing';

import { UpdateDataByApiService } from './update-data-by-api.service';

describe('UpdateDataByApiService', () => {
  let service: UpdateDataByApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDataByApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
