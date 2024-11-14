import { TestBed } from '@angular/core/testing';

import { SessionesService } from './sessiones.service';

describe('SessionesService', () => {
  let service: SessionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
