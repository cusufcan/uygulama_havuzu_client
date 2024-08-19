import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/presentation/components/auth/auth.component';
import { BlockGuard } from './guards/block.guard';
import { HomeComponent } from './home/presentation/components/home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [BlockGuard] },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
