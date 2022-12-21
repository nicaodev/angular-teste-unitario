import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';

import { ListComponent } from './list.component';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService

  const mockList: Array<Investiments> = MOCK_LIST

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Para executar os testes : ng test --code-coverage

  //Teste com dados MOCKados
  it('(Unitario) investiments list investiments MOCKADOS', () => {
    spyOn(service, 'list').and.returnValue(of(mockList)); // espiona os dados que viriam do server e troca pelo mock.
    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(3);
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[0].value).toEqual(100);


    //expect(investiments.length).toBe(4);
    // expect(investiments[0].name).toContain('Itaú');
  });
});
