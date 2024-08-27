// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Constants
import { AUTH_REPOSITORY_TOKEN } from './core/domain/interfaces/auth-repository.interface';
import { TODO_REPOSITORY_TOKEN } from './core/domain/interfaces/todo-repository.interface';

// Pages
import { BmiComponent } from './presentation/pages/apps/bmi/bmi.component';
import { RandomquotesComponent } from './presentation/pages/apps/randomquotes/randomquotes.component';
import { TodoComponent } from './presentation/pages/apps/todo/todo.component';
import { WeatherComponent } from './presentation/pages/apps/weather/weather.component';
import { AuthComponent } from './presentation/pages/auth/auth.component';
import { HomeComponent } from './presentation/pages/home/home.component';

// Components
import { BmiCardComponent } from './presentation/components/bmi-card/bmi-card.component';
import { HomeCardComponent } from './presentation/components/home-card/home-card.component';
import { TodoTileComponent } from './presentation/components/todo-tile/todo-tile.component';

// Services
import { AuthRepositoryService } from './core/infrastructure/repositories/auth-repository.service';
import { TodoRepositoryService } from './core/infrastructure/repositories/todo-repository.service';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

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
    BmiCardComponent,
    TodoTileComponent,
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
    { provide: TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
