import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './cc/home/home.component';
import { AboutComponent } from './cc/about/about.component';
import { PageNotFoundComponent } from './cc/page-not-found/page-not-found.component';
import { SerialreadComponent } from './cc/serialread/serialread.component';
import { ApplicationComponent } from './cc/application/application.component';
import { LoginComponent } from './cc/login/login.component';
import { AppIntroComponent } from './cc/app-intro/app-intro.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'application',
    component: ApplicationComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'application-introduction', component: AppIntroComponent},
      { path: 'serialRead', component: SerialreadComponent},
      { path: 'about', component: AboutComponent},
      { path: '**', component: PageNotFoundComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
