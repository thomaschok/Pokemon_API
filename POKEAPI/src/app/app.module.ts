import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Generation1Component } from './generation1/generation1.component';
import { Generation2Component } from './generation2/generation2.component';
import { Generation3Component } from './generation3/generation3.component';
import { Generation4Component } from './generation4/generation4.component';
import { Generation5Component } from './generation5/generation5.component';
import { Generation6Component } from './generation6/generation6.component';
import { Generation7Component } from './generation7/generation7.component';
import { Generation8Component } from './generation8/generation8.component';

import { LetterpokemonComponent } from './letterpokemon/letterpokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TeamComponent } from './team/team.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavBarComponent,
    PokemonComponent,
    Generation1Component,
    Generation2Component,
    Generation3Component,
    Generation4Component,
    Generation5Component,
    Generation6Component,
    Generation7Component,
    Generation8Component,
    LetterpokemonComponent,
    PokemonListComponent,
    TeamComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
