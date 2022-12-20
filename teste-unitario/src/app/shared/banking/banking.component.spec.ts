import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/list/list.component';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent] // Declara aqui componentes e/ou services que estão dentro de outros.
    })
      .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Para executar os testes : ng test --code-coverage
  it('(Unitario) GetSaldo(): should have saldo have 20', () => expect(component.getSaldo).toEqual(20));

  it('(Unitario) GetCarteira(): should have carteira have 10', () => expect(component.getCarteira).toEqual(10));

  it(`(Unitario) setSacar() should transfer saldo to carteira`, () => {
    component.setSacar('20');
    // fixture.detectChanges(); // somente usa-se para detectar mudanças visuais, no caso, em valores em 'var' n precisa.

    expect(component.getSaldo).toEqual(0);
    expect(component.getCarteira).toEqual(30)
  });

  it(`(Unitario) setDepositar() should transfer carteira to saldo`, () => {
    component.setDepositar('10');
    // fixture.detectChanges();
    expect(component.getSaldo).toEqual(30);
    expect(component.getCarteira).toEqual(0)
  });
  // Ifs dentro dos metodos

  it(`(Unitario) SetSacar() should transfer saldo to carteira doesn't have string(isNaN) or saldo < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();// Tentar sacar valor maior que tem disponivel, não pode.
  });

  it(`(Unitario) setDepositar() should transfer carteira to saldo doesn't have string(isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();// Tentar sacar valor maior que tem disponivel, não pode.
  });


});
