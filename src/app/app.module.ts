import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViniComponent } from './components/vini/vini.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { TerminiecondizioniComponent } from './components/terminiecondizioni/terminiecondizioni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViniComponent,
    AboutUsComponent,
    ContattiComponent,
    TerminiecondizioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
