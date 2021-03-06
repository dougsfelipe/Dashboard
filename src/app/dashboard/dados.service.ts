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
      ['2016.2', 7.88],
      ['2017.1', 7.41],
      ['2017.2', 6.63],
      ['2018.1', 5.36],
      ['2018.2', 7.32],
      ['2019.1', 7.56],
      ['2019.2', 6.34],
    ],
    aprovacaoes: [
      ['Aprovações por Média', 21],
      ['Aprovações na final', 6
    ],
      ['Reprovações', 4],
      ['Reprovações por falta', 1],
    ],
    cursadasEdispensadas: [
      ['Eletivas Livres Cursadas', 1],
      ['Eletivas Livres Dispensadas', 3],
      ['Eletivas de Perfil Cursadas', 1],
      ['Eletivas de Perfil Dispensadas', 0],
      ['Obrigatorias Cursadas', 23],
      ['Obrigatorias Dispensadas', 0],
    ],
    aprovacoesPorMatriculas: [
      ['2016.2', 5.0, 5.0],
      ['2017.1', 5.0, 3.0],
      ['2017.2', 5.0, 4.0],
      ['2018.1', 5.0, 3.0],
      ['2018.2', 5.0, 5.0],
      ['2019.1', 4.0, 4.0],
      ['2019.2', 5.0, 4.0],
    ]



  }






  


  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.data);
      observable.complete();
      console.log(this.data.aprovacaoes);
    });
  }

}
