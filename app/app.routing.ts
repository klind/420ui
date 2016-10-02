import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Router, ActivatedRoute, Params}               from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProfilesComponent} from "./profiles/profiles.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {SurveyComponent} from "./survey/survey.component";
import {AnswerComponent} from "./answer/answer.component";
import {MySurveysComponent} from "./mySurveys/mySurveys.component";


const appRoutes: Routes = [

    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'profiles', component: ProfilesComponent
    },
    {
        path: 'profile/:id', component: ProfileComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'survey/:id', component: SurveyComponent
    },
    {
        path: 'mysurveys', component: MySurveysComponent
    },
    {
        path: 'answer', component: AnswerComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
