import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Generation1Component } from './generation1/generation1.component';
import { Generation2Component } from './generation2/generation2.component';
import { Generation3Component } from './generation3/generation3.component';
import { Generation4Component } from './generation4/generation4.component';
import { Generation5Component } from './generation5/generation5.component';
import { Generation6Component } from './generation6/generation6.component';
import { Generation7Component } from './generation7/generation7.component';
import { Generation8Component } from './generation8/generation8.component';
import { ObservablePageComponent } from './observable-page/observable-page.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'home/:letter', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path: 'team', component: TeamComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  {path: 'pokemon', component: PokemonComponent},
  { path: 'generation1', component: Generation1Component},
  { path: 'generation2', component: Generation2Component},
  { path: 'generation3', component: Generation3Component},
  { path: 'generation4', component: Generation4Component},
  { path: 'generation5', component: Generation5Component},
  { path: 'generation6', component: Generation6Component},
  { path: 'generation7', component: Generation7Component},
  { path: 'generation8', component: Generation8Component},
  { path: 'observable', component: ObservablePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
