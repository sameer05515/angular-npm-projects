import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password';
import { SignupPageComponent } from './pages/signup/signup';
import { TopicMgmtPageComponent } from './pages/topic-mgmt/topic-mgmt';
import { WelcomePageComponent } from './pages/welcome/welcome';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'topics', component: TopicMgmtPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: '**', redirectTo: 'login' }
];
