import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockGuard } from './core/infrastructure/guards/block.guard';
import { BmiComponent } from './presentation/pages/apps/bmi/bmi.component';
import { RandomquotesComponent } from './presentation/pages/apps/randomquotes/randomquotes.component';
import { TodoComponent } from './presentation/pages/apps/todo/todo.component';
import { WeatherComponent } from './presentation/pages/apps/weather/weather.component';
import { AuthComponent } from './presentation/pages/auth/auth.component';
import { HomeComponent } from './presentation/pages/home/home.component';

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
