import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'static',
    loadChildren: () => import('./static/static.routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'static/home',
    pathMatch: 'full',
  },
];
