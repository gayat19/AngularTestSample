import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should check for return in check",()=>{
    expect(service.check()).toBe("hello")
  });
});
