import { Component } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public investiments: Array<Investiments> = [{
    name: "Itaú",
    value: 1000
  },
  {
    name: "Nubank",
    value: 12000
  }, {
    name: "BB Investiments",
    value: 2500
  }];


}
