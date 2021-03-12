import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseRlamComponent } from './components/base-rlam/base-rlam.component';
import { ExponenteRlamComponent } from './components/exponente-rlam/exponente-rlam.component';
import { PotenciaRlamComponent } from './components/potencia-rlam/potencia-rlam.component';
import { AcumuladorRlamComponent } from './components/acumulador-rlam/acumulador-rlam.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseRlamComponent,
    ExponenteRlamComponent,
    PotenciaRlamComponent,
    AcumuladorRlamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
