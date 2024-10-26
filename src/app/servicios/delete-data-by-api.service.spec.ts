import { TestBed } from '@angular/core/testing';

import { DeleteDataByApiService } from './delete-data-by-api.service';

describe('DeleteDataByApiService', () => {
  let service: DeleteDataByApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDataByApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
