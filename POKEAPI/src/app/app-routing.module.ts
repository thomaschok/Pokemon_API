import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { Gen1a3Component } from './gen1a3/gen1a3.component';
import { Gen4a6Component } from './gen4a6/gen4a6.component';
import { Gen7a8Component } from './gen7a8/gen7a8.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Gen1a3', component: Gen1a3Component},
  { path: 'Gen4a6', component: Gen4a6Component},
  { path: 'Gen7a8', component: Gen7a8Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
