import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//Start

export class DashboardComponent implements OnInit {

  //Declaração de Variaveis dos dados
  evolucaoCR: any;
  evolucaoMediaGeral: any;
  aprovacaoes: any;
  cursadasEdispensadas: any;
  aprovacoesPorMatriculas: any;
  timelineCurso: any;

  constructor(private dadosService: DadosService) { }

  //Inicio da atriubuição dos dados
  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {

        this.evolucaoCR = dados.evolucaoCR;
        this.evolucaoMediaGeral = dados.evolucaoMediaGeral;
        this.aprovacaoes = dados.aprovacaoes;
        this.cursadasEdispensadas = dados.cursadasEdispensadas;
        this.aprovacoesPorMatriculas = dados.aprovacoesPorMatriculas;
        this.timelineCurso = dados.timelineCurso;

        this.init();
      });
  }


  init(): void {
    if (typeof (google) !== 'undefined') {
      google.charts.load('current', { 'packages': ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }


  //Metodo para exibir os gráficos
  exibirGraficos(): void {
    this.exibirPieChart();
    

    this.exibirLineChart();
    this.exibirCollumnChart();
    this.exibirDonutChart();
    this.exibirAreaChart();
    
  }


  // Grafico de Linha


  exibirLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);


    var options = {

      'title': 'Evolução da CR geral',
      'width': 1000,
      'height': 500
    };

    const data = new google.visualization.DataTable();

    data.addColumn('string', 'CR');
    data.addColumn('number', 'numero do CR');
    data.addRows(this.evolucaoCR);

    chart.draw(data, options);
  }



  //Grafico de barra - evoulação da media geral

  exibirCollumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    var options = {

      'title': 'Evolução da media geral',
      'width': 1000,
      'height': 800
    };



    const data = new google.visualization.DataTable();

    data.addColumn('string', 'CR');
    data.addColumn('number', 'Media Geral');
    data.addRows(this.evolucaoMediaGeral);


    chart.draw(data, options);
  }



  // Grafico de Pizza - Aprovações e Reprovações
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    var options = {

      'title': 'Aprovações e Reprovações',
      'width': 1000,
      'height': 800
    };

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Trablho');
    data.addColumn('number', 'Media Geral');


    data.addRows(this.aprovacaoes);



    chart.draw(data, options);
  }


  // Grafico de Donut - Aprovações e Reprovações
  exibirDonutChart(): void {
    const el = document.getElementById('pie_chart2');
    const chart = new google.visualization.PieChart(el);

    var options = {

      'title': 'Aprovações e Reprovações',
      'width': 1000,
      'height': 800,
      'pieHole' : 0.3
    };

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Trablho');
    data.addColumn('number', 'Media Geral');
    

    data.addRows(this.cursadasEdispensadas);



    chart.draw(data, options);
  }


  //Area Chart - Matriculas por Discipinhas aprovadas

  exibirAreaChart(): void {
    
    const data = new google.visualization.DataTable();
  
    data.addColumn('string', 'Numero');
    data.addColumn('number', 'Media Geral');
    data.addColumn('number', 'Media Geral');

    data.addRows(this.aprovacoesPorMatriculas);

    var options = {
      title: 'Company Performance',
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      'width': 1000,
      'height': 800
    };

    var chart = new google.visualization.AreaChart(document.getElementById('test'));
    chart.draw(data, options);
  }

























}



