// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Constants
import { AUTH_REPOSITORY_TOKEN } from './core/domain/interfaces/auth-repository.interface';
import { QUOTE_REPOSITORY_TOKEN } from './core/domain/interfaces/quote-repository.interface';
import { TODO_REPOSITORY_TOKEN } from './core/domain/interfaces/todo-repository.interface';
import { WEATHER_REPOSITROY_TOKEN } from './core/domain/interfaces/weather-repository.interface';

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
import { CityCardComponent } from './presentation/components/weather/city-card/city-card.component';
import { CityConditionImageComponent } from './presentation/components/weather/city-condition-image/city-condition-image.component';
import { CityConditionLabelComponent } from './presentation/components/weather/city-condition-label/city-condition-label.component';
import { CityCurrentLabelComponent } from './presentation/components/weather/city-current-label/city-current-label.component';
import { CityInfoLabelComponent } from './presentation/components/weather/city-info-label/city-info-label.component';
import { WeatherMainCardComponent } from './presentation/components/weather/weather-main-card/weather-main-card.component';

// Services
import { AuthRepositoryService } from './core/infrastructure/repositories/auth-repository.service';
import { QuoteRepositoryService } from './core/infrastructure/repositories/quote-repository.service';
import { TodoRepositoryService } from './core/infrastructure/repositories/todo-repository.service';
import { WeatherRepositoryService } from './core/infrastructure/repositories/weather-repository.service';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    // Base
    AppComponent,

    // Pages
    AuthComponent,
    HomeComponent,
    BmiComponent,
    RandomquotesComponent,
    TodoComponent,
    WeatherComponent,

    // Components
    HomeCardComponent,
    BmiCardComponent,
    TodoTileComponent,
    WeatherMainCardComponent,
    CityCardComponent,
    CityInfoLabelComponent,
    CityCurrentLabelComponent,
    CityConditionLabelComponent,
    CityConditionImageComponent,
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
    InputTextareaModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  providers: [
    // Repository Tokens
    { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthRepositoryService },
    { provide: TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryService },
    { provide: QUOTE_REPOSITORY_TOKEN, useClass: QuoteRepositoryService },
    { provide: WEATHER_REPOSITROY_TOKEN, useClass: WeatherRepositoryService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
