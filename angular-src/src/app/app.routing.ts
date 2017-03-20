import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes : Routes = [
    { path : '', children : [
        { path : '', component : HomeComponent},
        { path : 'login', component : LoginComponent},
        { path : 'signup', component : SignupComponent}
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