import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReportComponent } from '../report/report.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PostsComponent,
    PostsComponent,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    RouterLink,
    ReportComponent,
    UsersComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
