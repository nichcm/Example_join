import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMeusAnimaisComponent } from './lista-meus-animais.component';

describe('ListaMeusAnimaisComponent', () => {
  let component: ListaMeusAnimaisComponent;
  let fixture: ComponentFixture<ListaMeusAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMeusAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMeusAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
