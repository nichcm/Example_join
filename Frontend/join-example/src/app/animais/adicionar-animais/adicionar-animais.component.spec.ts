import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAnimaisComponent } from './adicionar-animais.component';

describe('AdicionarAnimaisComponent', () => {
  let component: AdicionarAnimaisComponent;
  let fixture: ComponentFixture<AdicionarAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
