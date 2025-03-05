import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginPageComponent
    },
    {
        path: "home",
        component: HomeComponent
    }
];
