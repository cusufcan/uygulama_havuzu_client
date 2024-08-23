import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockGuard } from './guards/block.guard';
import { BmiComponent } from './old/apps/bmi_app/bmi/bmi.component';
import { RandomquotesComponent } from './old/apps/randomquotes_app/randomquotes/randomquotes.component';
import { TodoComponent } from './old/apps/todo_app/todo/todo.component';
import { WeatherComponent } from './old/apps/weather_app/weather/weather.component';
import { AuthComponent } from './onion/presentation/pages/auth/auth.component';
import { HomeComponent } from './onion/presentation/pages/home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [BlockGuard] },
  { path: 'bmi', component: BmiComponent, canActivate: [BlockGuard] },
  {
    path: 'quotes',
    component: RandomquotesComponent,
    canActivate: [BlockGuard],
  },
  { path: 'todo', component: TodoComponent, canActivate: [BlockGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [BlockGuard] },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
