import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TeamComponent } from './team/team.component';
import { GenerationselectComponent } from './generationselect/generationselect.component';
import { LetterpokemonComponent } from './letterpokemon/letterpokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    PokemonListComponent,
    LetterpokemonComponent,
    AboutComponent,
    HeaderComponent,
    NavBarComponent,
    PokemonComponent,
    TeamComponent,
    GenerationselectComponent,
    BarreRechercheComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
