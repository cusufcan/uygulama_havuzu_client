import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './onion/presentation/pages/auth/auth.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

import { CardModule } from 'primeng/card';
import { AUTH_REPOSITORY_TOKEN } from './onion/core/domain/interfaces/auth-repository.interface';
import { AuthRepositoryService } from './onion/core/infrastructure/repositories/auth-repository.service';
import { HomeCardComponent } from './onion/presentation/components/home-card/home-card.component';
import { BmiComponent } from './onion/presentation/pages/apps/bmi/bmi.component';
import { RandomquotesComponent } from './onion/presentation/pages/apps/randomquotes/randomquotes.component';
import { TodoComponent } from './onion/presentation/pages/apps/todo/todo.component';
import { WeatherComponent } from './onion/presentation/pages/apps/weather/weather.component';
import { HomeComponent } from './onion/presentation/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BmiComponent,
    HomeCardComponent,
    RandomquotesComponent,
    TodoComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    CardModule,
  ],
  providers: [
    { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthRepositoryService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
