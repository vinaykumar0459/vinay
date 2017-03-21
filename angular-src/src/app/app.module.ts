import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './components/guard/auth.guard';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './components/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
