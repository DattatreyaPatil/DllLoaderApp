import { TestBed } from '@angular/core/testing';

import { DllAccessorService } from './dll-accessor.service';

describe('DllAccessorService', () => {
  let service: DllAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DllAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
