import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
import { Plotd3jsComponent } from './cc/plotd3js/plotd3js.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
<<<<<<< HEAD
  {path: '', component: HomeComponent},
=======
  {path: 'plot', component: Plotd3jsComponent},
  {path: '', redirectTo: 'home'},
>>>>>>> fa0b8b05bba9f9c8d2a536bc9796bdbbe6a62c64
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
