/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferenceService } from './transference.service';

describe('Service: Transference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferenceService]
    });
  });

  it('should ...', inject([TransferenceService], (service: TransferenceService) => {
    expect(service).toBeTruthy();
  }));
});
