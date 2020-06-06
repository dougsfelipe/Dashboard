import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule
    
  ],
  exports: [
    DashboardComponent
  ],providers:[
    DadosService
  ]

})
export class DashboardModule { }
