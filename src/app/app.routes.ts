import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { RegisterPlantsComponent } from './components/register-plants/register-plants.component';
import { CommunityComponent } from './components/community/community.component';
import { EducationComponent } from './components/education/education.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CentralPanelComponent } from './components/central-panel/central-panel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },    
    { path: 'monitoring', component: MonitoringComponent},
    { path: 'register-plants', component: RegisterPlantsComponent},
    { path: 'community', component: CommunityComponent},
    { path: 'education', component: EducationComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'central-panel', component: CentralPanelComponent}
]