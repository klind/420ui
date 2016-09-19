import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ProfileComponent } from "./profile/profile.component";

const appRoutes: Routes = [
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },

    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'profiles',
        component: ProfileComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
