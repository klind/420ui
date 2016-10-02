import {Component}        from '@angular/core';
import {Login}            from './login';
import {Token}            from "../shared/token";
import {LoginService}     from './login.service';
/*import { OnInit }           from '@angular/core';*/
import {Router}           from '@angular/router';
import {OnInit}               from '@angular/core';

@Component({
    /*selector: 'register',*/
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router,
                private loginService: LoginService) {
    }

    model = new Login();
    token:string;

    //private id: number;

    ngOnInit(): void {
        this.token=localStorage.getItem("token");
    }

    onSubmit() {
        this.loginService.login(this.model)
            .do(res => console.log("token: " + JSON.stringify(res)))
            .subscribe(
                res => this.save(res.token, res.id, this.model.email),
                err => this.handleError(err),
                () => console.log("Logout complete")
            );
    }

    private save(token: string, id: number, email: string) {
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        if (id === null) {
            this.gotoProfile();
        } else {
            console.log("saving token to local storage : " + token);
            localStorage.setItem("userId", id.toString());
            this.gotoMySurveys();
        }
        this.token=token;
    }

    private handleError(error: any) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        this.token=null;
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        if (error.status === 401) {
            alert("Unauthorized");
        }
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return Observable.throw(errMsg);
    }

    /*register():void {
     //this.profileService.getProfiles().then(profiles => this.profiles = profiles);
     this.registerService.register();
     }*/

    gotoMySurveys(): void {
        let link = ['/mysurveys'];
        //console.log("Routing to /surveys/"+id);
        this.router.navigate(link);
    }

    gotoProfile(): void {
        let link = ['/profile'];
        //console.log("Routing to /surveys/"+id);
        this.router.navigate(link);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }


}




