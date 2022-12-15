import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Gen1Component } from './gen1/gen1.component';
import { Gen1a3Component } from './gen1a3/gen1a3.component';
import { Gen4a6Component } from './gen4a6/gen4a6.component';
import { Gen7a8Component } from './gen7a8/gen7a8.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    Gen1Component,
    Gen1a3Component,
    Gen4a6Component,
    Gen7a8Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
