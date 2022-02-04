import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import { PessoasModule } from './pessoas/pessoas.module';
import { AnimaisModule } from './animais/animais.module';
import { MeusAnimaisModule } from './meus-animais/meus-animais.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PessoasModule,
    AnimaisModule,
    MeusAnimaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
