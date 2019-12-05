import { TestBed } from '@angular/core/testing';

import { AuthenthicationService } from './authenthication.service';

describe('AuthenthicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenthicationService = TestBed.get(AuthenthicationService);
    expect(service).toBeTruthy();
  });
});
