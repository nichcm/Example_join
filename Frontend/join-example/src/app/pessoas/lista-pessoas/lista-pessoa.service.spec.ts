import { TestBed } from '@angular/core/testing';

import { ListaPessoaService } from './lista-pessoa.service';

describe('ListaPessoaService', () => {
  let service: ListaPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
