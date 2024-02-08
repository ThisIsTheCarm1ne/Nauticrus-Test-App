import { TestBed } from '@angular/core/testing';

import { ImageIdSharedService } from './image-id-shared.service';

describe('ImageIdSharedService', () => {
  let service: ImageIdSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageIdSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
