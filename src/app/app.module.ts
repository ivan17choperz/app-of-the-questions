import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './parts/home/home.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { GameFlagsComponent } from './parts/game-flags/game-flags.component';
import { GameCapitalsComponent } from './parts/game-capitals/game-capitals.component';
import { GameCardCapitalComponent } from './parts/game-capitals/game-card/game-card-capital.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GameFlagsComponent,
    GameCapitalsComponent,
    GameCardCapitalComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
