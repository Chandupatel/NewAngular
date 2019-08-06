import { TestBed } from '@angular/core/testing';

import { DatabsaeService } from './databsae.service';

describe('DatabsaeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabsaeService = TestBed.get(DatabsaeService);
    expect(service).toBeTruthy();
  });
});
