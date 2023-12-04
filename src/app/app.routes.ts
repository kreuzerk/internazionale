import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'foo',
    loadComponent: () => import('./features/foo/foo.component').then(c => c.FooComponent)
  },
  {
    path: '**',
    redirectTo: 'foo',
    pathMatch: 'full'
  }
];
