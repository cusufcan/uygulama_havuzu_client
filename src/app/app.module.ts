import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/presentation/components/auth/auth.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { HomeCardComponent } from './home/presentation/components/home-card/home-card.component';
import { HomeComponent } from './home/presentation/components/home/home.component';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent, HomeCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
