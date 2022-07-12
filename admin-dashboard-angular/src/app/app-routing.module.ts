import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
