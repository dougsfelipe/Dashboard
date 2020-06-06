import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {



  //Teste dados








  readonly data = {
    evolucaoCR: [
      ['2016.2', 7.70],
      ['2017.1', 5.78],
      ['2017.2', 6.48],
      ['2018.1', 4.81],
      ['2018.2', 7.11],
      ['2019.1', 7.40],
      ['2019.2', 5.88],
    ],
    evolucaoMediaGeral: [
      ['2016.2', 7.70],
      ['2017.1', 5.78],
      ['2017.2', 6.48],
      ['2018.1', 4.81],
      ['2018.2', 7.11],
      ['2019.1', 7.40],
      ['2019.2', 5.88],
    ],
    aprovacaoes: [
      ['Aprovações diretas', 8],
      ['Aprovações na final', 7],
      ['Reprovações', 6],
      ['Reprovações por falta', 2],
    ],
    cursadasEdispensadas: [
      ['Eletivas Livres Cursadas', 8],
      ['Eletivas Livres Dispensadas', 7],
      ['Eletivas de Perfil Cursadas', 8],
      ['Eletivas de Perfil Dispensadas', 7],
      ['Obrigatorias Cursadas', 6],
      ['Obrigatorias Dispensadas', 2],
    ],
    aprovacoesPorMatriculas: [
      ['2016.2', 7.70, 1],
      ['2017.1', 5.78, 4],
      ['2017.2', 6.48, 4],
      ['2018.1', 4.81, 4],
      ['2018.2', 7.11, 5],
      ['2019.1', 7.40, 7],
      ['2019.2', 5.88, 8],
    ],
    timelineCurso: [
      [ '2016.2', 'Primeiro Periodo', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2017.1', 'Segundo Periodo',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '2017.1', 'Terceiro Periodo',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ],
      [ '2016.2', 'Primeiro Periodo', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2017.1', 'Segundo Periodo',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '2017.1', 'Terceiro Periodo',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ],
    ],



  }






  readonly dataAsArray = [


    this.testedados.forEach(element => {
      this.testedados.map(value => value.semestres[0].CR);
    })

    //this.testedados.map(value => value.semestres[0].CR),
  ];


  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.obj);
      observable.complete();
      console.log(this.obj.dados1);
    });
  }

}
