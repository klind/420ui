import {Component}        from '@angular/core';
import {Register}         from './register';
import {RegisterService}  from './register.service';
import { OnInit }           from '@angular/core';
import {Router}           from '@angular/router';
import {Token}                                    from "../shared/token";

@Component({
    /*selector: 'register',*/
    templateUrl: 'app/register/register.component.html'
})
export class RegisterComponent {
    constructor(private router: Router,
                private registerService: RegisterService) {
    }

    model = new Register();
    token:string;

    ngOnInit(): void {
        this.token=localStorage.getItem("token");
    }

    onSubmit() {
        if (localStorage.getItem("token") === null) {
            this.registerService.register(this.model)
                .do(res => console.log("token: " + JSON.stringify(res)))
                .subscribe(
                    res => this.save(res.token, this.model.email),
                    err => this.handleError(err),
                    () => console.log("Register complete"));
        }

    }


    private save(token: string, email: string) {
        console.log("saving token to local storage : " + token);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        this.gotoProfile();
    }

    gotoProfile(): void {
        let link = ['/profile'];
        //console.log("Routing to /surveys/"+id);
        this.router.navigate(link);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    /*gotoLogin(): void {
        let link = ['/profile'];
        this.router.navigate(link);
    }*/

    private handleError(error: any) {
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


}




