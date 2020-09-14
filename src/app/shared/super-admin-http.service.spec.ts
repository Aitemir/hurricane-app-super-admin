import { TestBed } from '@angular/core/testing';

import { SuperAdminHttpService } from './super-admin-http.service';

describe('SuperAdminHttpService', () => {
  let service: SuperAdminHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdminHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
