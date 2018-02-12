import { TestBed, inject } from '@angular/core/testing';

import { ContactRestService } from './contact-rest.service';

describe('ContactRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactRestService]
    });
  });

  it('should be created', inject([ContactRestService], (service: ContactRestService) => {
    expect(service).toBeTruthy();
  }));
});
