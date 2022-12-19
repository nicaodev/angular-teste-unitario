import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {

  private saldo: number = 20;
  private carteira: number = 10;


  get getSaldo(): number {
    return this.saldo;
  }
  get getCarteira(): number {
    return this.carteira;
  }


  public setSacar(value: string): number | undefined {
    const sacar = Number(value);

    if (isNaN(sacar) || this.saldo < sacar)
      return;

    this.saldo -= sacar;
    return this.carteira += sacar;

  }

  public setDepositar(value: string): number | undefined {
    const deposito = Number(value);

    if (isNaN(deposito) || this.carteira < deposito)
      return;

    this.carteira -= deposito;
    return this.saldo += deposito;

  }
}
// ng test --code-coverage


