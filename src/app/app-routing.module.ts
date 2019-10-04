import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
import { SerialreadComponent } from './cc/serialread/serialread.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      {path: 'serialRead', component: SerialreadComponent},
      {path: 'about', component: AboutComponent},
      // {path: '', component: HomeComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
