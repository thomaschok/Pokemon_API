import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { GenerationselectComponent } from './generationselect/generationselect.component';
import { ObservablePageComponent } from './observable-page/observable-page.component';
import { TeamComponent } from './team/team.component';
import { LancementComponent } from './lancement/lancement.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lancement'},
  {path: 'generation/:id',component: GenerationselectComponent},
  {path: 'team', component: TeamComponent},
  {path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  {path: 'pokemon', component: PokemonComponent},
  { path: 'observable', component: ObservablePageComponent},
  { path: 'lancement', component: LancementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
