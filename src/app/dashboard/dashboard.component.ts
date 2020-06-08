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

      'width': 1090,
      'height': 520,
      vAxis: {
        ticks: [2, 4, 6, 8, 10]
      },
      chartArea: {width: '90%', height: '70%'},
      legend: {'position': 'bottom'},
      colors: ['#4e73df'],
      curveType: 'function',
      pointSize: 10,

    };

    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Coenficiente de Rendimento');
    data.addColumn('number', 'Coenficiente de Rendimento ');
    data.addRows(this.evolucaoCR);

    chart.draw(data, options);
  }



  //Grafico de barra - evoulação da media geral

  exibirCollumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    var options = {

      
      'width': 1090,
      'height': 520,
      vAxis: {
        ticks: [2, 4, 6, 8, 10]
      },
      colors: ['#4e73df'],
      ry: 50,
      rx: 10,
      chartArea: {width: '90%', height: '70%'},
      legend: {'position': 'bottom'}
    };



    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Media Geral');
    data.addColumn('number', 'Media Geral');
    data.addRows(this.evolucaoMediaGeral);


    chart.draw(data, options);
  }



  // Grafico de Pizza - Aprovações e Reprovações
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    var options = {

      width: 520,
      height: 350,
      chartArea: {width: '80%', height: '80%'},
      colors: ['#1cc88a','#36b9cc','#f6c23e','#e74a3b'],
      legend: {'position':'right','alignment':'center'},
    };

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Tipo');
    data.addColumn('number', 'Quantidade');

    data.addRows(this.aprovacaoes);

    chart.draw(data, options);
  }


  // Grafico de Donut - Cursadas e Dispensadas
  exibirDonutChart(): void {
    const el = document.getElementById('pie_chart2');
    const chart = new google.visualization.PieChart(el);

    var options = {

      pieHole: 0.6,
      width: 520,
      height: 350,
      chartArea: {width: '80%', height: '80%'},
      colors: ['#1cc88a','#36b9cc','#4e73df','#f6c23e'],
      legend: {'position':'right','alignment':'center'},
      
    };

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Disciplina');
    data.addColumn('number', 'Quantidade');

    data.addRows(this.cursadasEdispensadas);

    chart.draw(data, options);
  }


  //Area Chart - Matriculas por Discipinhas aprovadas

  exibirAreaChart(): void {

    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Semestre');
    data.addColumn('number', 'Matriculada');
    data.addColumn('number', 'Aprovadas');

    data.addRows(this.aprovacoesPorMatriculas);

    var options = {
      
      hAxis: { 
               titleTextStyle: { color: '#333' },
               
              }  ,
              
      vAxis: {
        minValue: 0,
        ticks: [2, 4, 6, 8, 10],
      
      },
      chartArea: {width: '80%', height: '80%'},
      'width': 1090,
      'height': 520,
      colors: ['#1cc88a','#e74a3b'],
      legend: {'position': 'bottom'}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
    chart.draw(data, options);
  }

























}



