import {Injectable}                               from '@angular/core';
import {Headers, Http, RequestOptions, Response}  from '@angular/http';
import {Observable}                               from 'rxjs/Observable';
import {Router}           from '@angular/router';
import {ProfileService} from "../profile/profile.service";
import {ProfileComponent} from "../profile/profile.component";

@Injectable()
export class LogoutService {
    private logoutURL = 'http://localhost:8080/mms/api/logout';
    // URL to web api

    constructor(private router: Router, private http: Http) {
    }

    logout() {

        let token = localStorage.getItem("token");
        let id = localStorage.getItem("userId");

        if (token != null || id != null) {
            let headers = new Headers({'Content-Type': 'application/json'});
            headers.append('Authorization', 'Bearer ' + token);
            headers.append('userId', id);
            let options = new RequestOptions({headers: headers});
            this.http.get(this.logoutURL, options)
                .subscribe(
                    res => this.success(),
                    err => this.handleError(err),
                    () => console.log("Logout complete")
                );
        }
        this.gotoLogin();
    }

    private handleError(error: any) {
        localStorage.clear();
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return Observable.throw(errMsg);
    }

    private gotoLogin() {
        let link = ['/dashboard'];
        this.router.navigate(link);
    }


    private success() {
        localStorage.clear();
    }
}
