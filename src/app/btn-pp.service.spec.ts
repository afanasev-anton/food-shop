import { TestBed } from '@angular/core/testing';

import { BtnPpService } from './btn-pp.service';

describe('BtnPpService', () => {
  let service: BtnPpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnPpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
