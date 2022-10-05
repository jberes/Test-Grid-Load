import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AutoUsersService } from './auto-users.service';

describe('AutoUsersService', () => {
  let service: AutoUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AutoUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
