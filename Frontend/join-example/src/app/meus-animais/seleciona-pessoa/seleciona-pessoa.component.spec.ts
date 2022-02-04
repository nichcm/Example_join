import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaPessoaComponent } from './seleciona-pessoa.component';

describe('SelecionaPessoaComponent', () => {
  let component: SelecionaPessoaComponent;
  let fixture: ComponentFixture<SelecionaPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionaPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
