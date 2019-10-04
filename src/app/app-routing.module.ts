import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
import { SerialreadComponent } from './cc/serialread/serialread.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'serialRead', component: SerialreadComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
