import { TestBed } from '@angular/core/testing';

import { ImgflipService } from './imgflip.service';

describe('ImgflipService', () => {
  let service: ImgflipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgflipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
