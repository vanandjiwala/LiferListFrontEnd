import { TestBed, inject } from '@angular/core/testing';

import { MySpeciesServiceService } from './my-species-service.service';

describe('MySpeciesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpeciesServiceService]
    });
  });

  it('should be created', inject([MySpeciesServiceService], (service: MySpeciesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
