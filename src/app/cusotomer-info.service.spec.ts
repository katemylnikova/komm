import { TestBed } from '@angular/core/testing';

import { CusotomerInfoService } from './cusotomer-info.service';

describe('CusotomerInfoService', () => {
  let service: CusotomerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusotomerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
