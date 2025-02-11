import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'', component:LandingComponent},
];
