import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';

describe('PostsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
