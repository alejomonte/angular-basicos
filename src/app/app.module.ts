import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador.component';
import { GeneradoComponent } from './com/generado/generado.component';
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    GeneradoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
