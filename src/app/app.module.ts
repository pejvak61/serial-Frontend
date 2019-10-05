import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
import { SerialreadComponent } from './cc/serialread/serialread.component';
import { Plotd3jsComponent } from './cc/plot/plotd3js/plotd3js.component';
import { PlotDiagramComponent } from './cc/plot/plot-diagram/plot-diagram.component';
import { LineChartComponent } from './cc/plot/plotDiagrams/line-chart/line-chart.component';

import { AppMaterialModule } from './app-material/app-material.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './cc/settings/settings.component';
import { ApplicationComponent } from './cc/application/application.component';
import { LoginComponent } from './cc/login/login.component';
import { AppIntroComponent } from './cc/app-intro/app-intro.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { DataServiceService } from './services/data/data-service.service';
import { AuthenticationService } from './services/interfaces/interfaces';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    SerialreadComponent,
    Plotd3jsComponent,
    PlotDiagramComponent,
    LineChartComponent,
    SettingsComponent,
    ApplicationComponent,
    LoginComponent,
    AppIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardGuard,
    DataServiceService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
