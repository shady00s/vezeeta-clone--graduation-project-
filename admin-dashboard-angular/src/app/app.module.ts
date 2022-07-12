import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SummaryComponent } from './component/summary/summary.component';
import { OverviewComponent } from './component/overview/overview.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroPageComponent,
    RegistrationComponent,
    LoginComponent,
    SidebarComponent,
    SummaryComponent,
    OverviewComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
