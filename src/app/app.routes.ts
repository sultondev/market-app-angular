import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: AuthComponent,
    path: 'auth',
  },
];
