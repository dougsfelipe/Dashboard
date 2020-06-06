import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

   dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados.dados2;
        this.init();
      });
  }

  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
      }
    }

    exibirGraficos(): void {
      this.exibirPieChart();
      this.exibir3dPieChart();
      this.exibirBarChart();
      this.exibirLineChart();
      this.exibirCollumnChart();
      this.exibirDonutChart();
    }

    exibirPieChart(): void {
      const el = document.getElementById('pie_chart');
      const chart = new google.visualization.PieChart(el);

      chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

    exibir3dPieChart(): void {
      const el = document.getElementById('3d_pie_chart');
      const chart = new google.visualization.PieChart(el);
      const opcoes = this.obterOpcoes();

      opcoes['is3D'] = true;
      chart.draw(this.obterDataTable(), opcoes);
    }

    exibirDonutChart(): void {
      const el = document.getElementById('donut_chart');
      const chart = new google.visualization.PieChart(el);
      const opcoes = this.obterOpcoes();

      opcoes['pieHole'] = 0.3;
      chart.draw(this.obterDataTable(), opcoes);
    }

    exibirBarChart(): void {
      const el = document.getElementById('bar_chart');
      const chart = new google.visualization.BarChart(el);
     
      chart.draw(this.obterDataTable(), this.obterOpcoes());
    }







    exibirLineChart(): void {
      const el = document.getElementById('line_chart');
      const chart = new google.visualization.LineChart(el);

      var options = {
        
          'title': 'Box Office Earnings in First Two Weeks of Opening',
          
       'curveType': 'function',
        
        'width': 1300,
        'height': 800 
      };



      const data = new google.visualization.DataTable();

      data.addColumn('string','CR');
      data.addColumn('number','numero do CR');

      //teste
      var arrays = ['Semestre', 'Semestre'];


      
      //for em todo array
      //colocar 1,1 no array
      



      data.addRows(this.dados);

     




      
     
      chart.draw(data,options);
    }











    exibirCollumnChart(): void {
      const el = document.getElementById('column_chart');
      const chart = new google.visualization.ColumnChart(el);
     
      chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

    obterDataTable(): any {
      
      const data = new google.visualization.DataTable();

      data.addColumn('string','CR');
      data.addColumn('number','numero do CR');

      //teste
      var arrays = ['Semestre', 'Semestre'];


      
      //for em todo array
      //colocar 1,1 no array
      



      data.addRows(this.dados);

     

      return data;
    }

    obterOpcoes(): any {
      return {
        'title': 'Quantidade de cadastro do primeiro semestre',
        'width': 1200,
        'height': 400
      }
    }

  }



