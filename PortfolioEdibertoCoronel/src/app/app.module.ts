import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcercademiModule } from './@components/acercademi/acercademi.module';
import { BannerModule } from './@components/banner/banner.module';
import { EducacionModule } from './@components/educacion/educacion.module';
import { ExperienciaModule } from './@components/experiencia/experiencia.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { ProyectosModule } from './@components/proyectos/proyectos.module';
import { TecnologiasModule } from './@components/tecnologias/tecnologias.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AcercademiModule,
    BannerModule,
    EducacionModule,
    ExperienciaModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    ProyectosModule,
    TecnologiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
