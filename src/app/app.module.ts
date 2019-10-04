import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
<<<<<<< HEAD
import { SerialreadComponent } from './cc/serialread/serialread.component';
import { Plotd3jsComponent } from './cc/plot/plotd3js/plotd3js.component';
import { PlotDiagramComponent } from './cc/plot/plot-diagram/plot-diagram.component';
=======
import { Plotd3jsComponent } from './cc/plotd3js/plotd3js.component';
>>>>>>> fa0b8b05bba9f9c8d2a536bc9796bdbbe6a62c64

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
<<<<<<< HEAD
    SerialreadComponent,
    Plotd3jsComponent,
    PlotDiagramComponent
=======
    Plotd3jsComponent
>>>>>>> fa0b8b05bba9f9c8d2a536bc9796bdbbe6a62c64
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
