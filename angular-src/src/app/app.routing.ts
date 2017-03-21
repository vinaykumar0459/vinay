import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './components/guard/auth.guard';

const appRoutes : Routes = [
    { path : '', children : [
        { path : '', component : HomeComponent},
        { path : 'login', component : LoginComponent},
        { path : 'signup', component : SignupComponent},
        { path: 'profile', component : ProfileComponent, canActivate:[AuthGuard] }
    ] }
    
    
]




@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}