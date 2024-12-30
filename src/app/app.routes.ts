import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'posts',
        loadComponent: () =>
          import('./posts/posts.component').then((m) => m.PostsComponent),
      },
      {
        path: 'report',
        loadComponent: () =>
          import('./report/report.component').then((m) => m.ReportComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users.component').then((m) => m.UsersComponent),
      },
    ],
  },
];
