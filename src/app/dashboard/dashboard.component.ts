import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

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
         chartArea: { width: '90%', height: '70%' },
         legend: { 'position': 'bottom' },
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
         chartArea: { width: '90%', height: '70%' },
         legend: { 'position': 'bottom' }
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
         chartArea: { width: '80%', height: '80%' },
         colors: ['#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
         legend: { 'position': 'right', 'alignment': 'center' },
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
         chartArea: { width: '80%', height: '80%' },
         colors: ['#1cc88a', '#36b9cc', '#4e73df', '#f6c23e'],
         legend: { 'position': 'right', 'alignment': 'center' },

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

         },

         vAxis: {
            minValue: 0,
            ticks: [2, 4, 6, 8, 10],

         },
         chartArea: { width: '90%', height: '70%' },
         'width': 1090,
         'height': 520,
         colors: ['#1cc88a', '#e74a3b'],
         legend: { 'position': 'bottom' }
      };

      var chart1 = new google.visualization.AreaChart(document.getElementById('areaChart'));
      chart1.draw(data, options);


     



      //testeNttworkGraph

      /* Chart code */
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      let chart = am4core.create("linetest", am4plugins_forceDirected.ForceDirectedTree);

      let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
      networkSeries.dataFields.linkWith = "linkWith";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.id = "name";
      networkSeries.dataFields.value = "value";
      networkSeries.dataFields.children = "children";
      networkSeries.maxRadius = 35;

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 8;
      networkSeries.linkWithStrength = 0;

      let nodeTemplate = networkSeries.nodes.template;
      nodeTemplate.tooltipText = `{name}
      Nota: {value}`;
      
      nodeTemplate.fillOpacity = 1;
      nodeTemplate.label.hideOversized = true;
      nodeTemplate.label.truncate = true;

      let linkTemplate = networkSeries.links.template;
      linkTemplate.strokeWidth = 1;
      let linkHoverState = linkTemplate.states.create("hover");
      linkHoverState.properties.strokeOpacity = 1;
      linkHoverState.properties.strokeWidth = 2;


      nodeTemplate.events.on("over", function (event) {
         let dataItem = event.target.dataItem;
         dataItem.childLinks.each(function (link) {
            link.isHover = true;
         })
      })

      nodeTemplate.events.on("out", function (event) {
         let dataItem = event.target.dataItem;
         dataItem.childLinks.each(function (link) {
            link.isHover = false;
         })
      })

      networkSeries.data = [
         {
            "name": "Primeiro Semestre",
            "value": 7.88,
            "children": [
               {
                  "name": "Introdução a Computação",
                  "value": 10
               },
               {
                  "name": "Introdução a Progamação",
                  "value": 8.81
               },
               {
                  "name": "Matemática Discreta",
                  "value": 7.02
               },
               {
                  "name": "Calculo 1",
                  "value": 6.41
               },
               {
                  "name": "Algebra Linear e Vetorial",
                  "value": 7.15
               }
            ]
         },
         {
            "name": "Segundo Semestre",
            "value": 8.45,
            "children": [
               {
                  "name": "Algoritmos e Estruturas de dados",
                  "value": 7.01
               },
               {
                  "name": "Lógica para Computação",
                  "value": 7.56
               },
               {
                  "name": "Sistemas Digitais",
                  "value": 9.56
               },
               {
                  "name": "Estatistica e Probalidade para computação",
                  "value": 9.62
               }
            ]
         },
         {
            "name": "Terceiro Semestre",
            "value": 8.05,
            "children": [
               {
                  "name": "Infraestrutura de Comunicação",
                  "value": 7.97
               },
               {
                  "name": "Infraestrutura de Software",
                  "value": 9
               },
               {
                  "name": "Infraestrutura de Hardware",
                  "value": 7
               },
               {
                  "name": "Inglês para computação",
                  "value": 7.6
               },
               {
                  "name": "Informática e Sociedade",
                  "value": 9.25
               }
            ]
         },
         {
            "name": "Quarto Semestre",
            "value": 6.83,
            "children": [
               {
                  "name": "Interface Usuario Maquina",
                  "value": 8
               },
               {
                  "name": "Engenharia de Software e Sistemas",
                  "value": 5.75
               },
               {
                  "name": "Sistemas Inteligentes",
                  "value": 8
               },
               {
                  "name": "Gerenciamento de Dados e Informações",
                  "value": 6.1
               },
               {
                  "name": "Informatica Teorica",
                  "value": 6.18
               },
               {
                  "name": "Processamento Gráfico",
                  "value": 7
               }
            ]
         },

         {
            "name": "Quinto Semestre",
            "value": 7.83,
            "children": [
               {
                  "name": "Projetão",
                  "value": 10
               },
               {
                  "name": "Paradigmas de Linguaguens Computacionais",
                  "value": 5.9
               },
               {
                  "name": "Compiladores",
                  "value": 6.34
               },
               {
                  "name": "Historia e Futuro da Computação",
                  "value": 7.75
               },
               {
                  "name": "Introdução a Multimidia",
                  "value": 7.75
               },
               {
                  "name": "Metodologia Expressão Tec-Cientifica ",
                  "value": 7
               }
            ]
         },

         {
            "name": "Eletivas",
            "value": 10,
            "children": [
               {
                  "name": "Jogos Digitais 2D",
                  "value": 10
               },
               {
                  "name": "Progamação 2",
                  "value": 10
               }            
            ]
         },
      ];






   }

























}



