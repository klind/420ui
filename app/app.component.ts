import {Component} from '@angular/core';
import {LogoutService}        from "./logout/logout.service";

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard"  routerLinkActive="active">Dashboard</a>
    <!--<a routerLink="/profiles"   routerLinkActive="active">Profiles</a>-->
    <a routerLink="/register"   routerLinkActive="active">Register</a>
    <a routerLink="/profile"    routerLinkActive="active">Profile</a>
    <a routerLink="/mysurveys"  routerLinkActive="active">Surveys</a>
    <a routerLink="/survey"  routerLinkActive="active">Survey</a>
    <!--<a routerLink="/answer"     routerLinkActive="active">Answer</a>-->
    <a routerLink="/login"      routerLinkActive="active">Login</a>
    <button (click)="logout()">Logout</button>
    
  </nav>
    
    
  <router-outlet></router-outlet>
`,
    styleUrls: ['app/app.component.css']


})
export class AppComponent {
    title = 'Medical Marijuana Survey';

    constructor(private logoutService: LogoutService) {

    }

    logout() {
        this.logoutService.logout();
        alert("you have been logged out");
    }


}
