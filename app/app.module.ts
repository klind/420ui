import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule}    from '@angular/http';
import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {FormsModule}          from '@angular/forms';
import {routing}              from './app.routing';
import {ProfileComponent}    from './profile/profile.component';
import {ProfileService}      from './profile/profile.service';
import {ProfilesComponent}    from './profiles/profiles.component';
import {ProfilesService}      from './profiles/profiles.service';
import {RegisterComponent}    from "./register/register.component";
import {RegisterService}      from "./register/register.service";
//import {LogoutService}        from "./logout/logout.service";
// Imports for loading & configuring the in-memory web api
/*import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';*/
/*import { InMemoryDataService }  from './in-memory-data.service';*/
/*import { InMemoryProfileDataService }  from './in-memory-data.profile.service';*/
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/login.service";
import './rxjs-extensions';
import {SurveyComponent} from "./survey/survey.component";
import {SurveyService}      from "./survey/survey.service";
import {AnswerComponent} from "./answer/answer.component";
import {AnswerService} from "./answer/answer.service";
import {MySurveysComponent} from "./mySurveys/mySurveys.component";
import {MySurveysService} from "./mySurveys/mySurveys.service";
import {LogoutService} from "./logout/logout.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProfileComponent,
        ProfilesComponent,
        RegisterComponent,
        LoginComponent,
        SurveyComponent,
        AnswerComponent,
        MySurveysComponent

    ],
    providers: [
        ProfileService,
        ProfilesService,
        RegisterService,
        LoginService,
        SurveyService,
        AnswerService,
        MySurveysService,
        LogoutService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}


