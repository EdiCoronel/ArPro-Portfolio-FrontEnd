import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiasComponent } from './tecnologias.component';



@NgModule({
  declarations: [
    TecnologiasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TecnologiasComponent]
})
export class TecnologiasModule { }
