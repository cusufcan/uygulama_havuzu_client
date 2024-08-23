import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './apps/bmi_app/bmi/bmi.component';
import { RandomquotesComponent as QuotesComponent } from './apps/randomquotes_app/randomquotes/randomquotes.component';
import { TodoComponent } from './apps/todo_app/todo/todo.component';
import { WeatherComponent } from './apps/weather_app/weather/weather.component';
import { BlockGuard } from './guards/block.guard';
import { HomeComponent } from './home/presentation/components/home/home.component';
import { AuthComponent } from './onion/presentation/components/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [BlockGuard] },
  { path: 'bmi', component: BmiComponent, canActivate: [BlockGuard] },
  {
    path: 'quotes',
    component: QuotesComponent,
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
