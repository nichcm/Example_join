import { TestBed } from '@angular/core/testing';

import { ListaPessoa.ServiceService } from './lista-pessoa.service.service';

describe('ListaPessoa.ServiceService', () => {
  let service: ListaPessoa.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPessoa.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
