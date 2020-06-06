import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {



  //Teste dados


  readonly testedados = [{
    "nomeAluno": "Douglas Felipe Candido dos Santos",
    "situação": "Matriculado",
    semestres : [
        {
            "semestre": 2016.1,
            "CR": 1,
            "mediaGeral": 5,
            "Situação": "Blocado",
            "materias": [
                
                {
                    "Calculo 1": [ 
                        {
                            "Notas" : [3,2,4],
                            "Situação" : "Aprovado",
                            "Faltas": 12
                        }
                    ],
                    "Algebra Linear": [
                        {
                            "Notas" : [3,2,4],
                            "Situação" : "Aprovado",
                            "Faltas": 2
                        }
                    ],
                    "Matematica Discreta": [
                        {
                            "Notas" : [3,2,4],
                            "Situação" : "Aprovado",
                            "Faltas": 42
                        }
                    ],
                    "Introdução a Progamacao": [
                        {
                            "Notas" : [3,2,4],
                            "Situação" : "Aprovado",
                            "Faltas": 22
                        }
                    ],
                    "Introdução a Computação": [
                        {
                            "Notas" : [3,2,4],
                            "Situação" : "Aprovado",
                            "Faltas": 12
                        }
                    ]
                },
                {
                    "Calculo 1": [],
                    "Algebra Linear": [],
                    "Matematica Discreta": [],
                    "Introdução a Progamacao": [],
                    "Introdução a Computação": []
                }
            ]
        },

        {
          "semestre": 2017.1,
          "CR": 5,
          "mediaGeral": 5,
          "Situação": "Blocado",
          "materias": [
              
              {
                  "Calculo 1": [ 
                      {
                          "Notas" : [3,2,4],
                          "Situação" : "Aprovado",
                          "Faltas": 12
                      }
                  ],
                  "Algebra Linear": [
                      {
                          "Notas" : [3,2,4],
                          "Situação" : "Aprovado",
                          "Faltas": 2
                      }
                  ],
                  "Matematica Discreta": [
                      {
                          "Notas" : [3,2,4],
                          "Situação" : "Aprovado",
                          "Faltas": 42
                      }
                  ],
                  "Introdução a Progamacao": [
                      {
                          "Notas" : [3,2,4],
                          "Situação" : "Aprovado",
                          "Faltas": 22
                      }
                  ],
                  "Introdução a Computação": [
                      {
                          "Notas" : [3,2,4],
                          "Situação" : "Aprovado",
                          "Faltas": 12
                      }
                  ]
              },
              {
                  "Calculo 1": [],
                  "Algebra Linear": [],
                  "Matematica Discreta": [],
                  "Introdução a Progamacao": [],
                  "Introdução a Computação": []
              }
          ]
      }
    ]
}]




readonly teste1 = this.testedados;

//Final teste dados


  readonly dados = [
    ['Janeiro',33],
    ['Fevereiro',68],
    ['Marco',49],
    ['Abril',31],
    ['Maio',15],
    ['Junho',57],
  ];

  readonly dados2 = [


    ['2016.1',8.6],
    ['2016.2',7.4],
    ['2017.1',6.2],
    ['2017.2',7.2],
    ['2018.1',5.2],
    ['2018.2',5.2],
    ['2019.1',7.1],
    ['2019.2',7],
    ['2020.1',7.8],
  ];


  readonly obj = {
    dados1: [
    ['2016.1',8.6],
    ['2016.2',7.4],
    ['2017.1',6.2],
    ['2017.2',7.2],
    ['2018.1',5.2],
    ['2018.2',5.2],
    ['2019.1',7.1],
    ['2019.2',7],
    ['2020.1',7.8]
    ],
    dados2: [
    ['agua',8],
    ['terra',7],
    ['2017.1',6],
    ['2017.2',2],
    ['2018.asda1',2],
    ['201sad8.2',52],
    ['2sad019.1',1],
    ['2sada019.2',7],
    ['2020.1',8]
    ]
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
