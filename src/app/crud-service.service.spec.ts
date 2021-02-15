import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';

describe('CrudServiceService', () => {

  
  let service: CrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(CrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
