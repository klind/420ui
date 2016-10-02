import { Injectable }                               from '@angular/core';
import { Headers, Http, RequestOptions, Response }  from '@angular/http';
import { Observable }                               from 'rxjs/Observable';
import { Login }                                    from './login';
import { Token }                                    from "../shared/token";
import { stringify }                                from "querystring";
/*import 'rxjs/add/operator/toPromise';*/
/*import './rxjs-operators';*/

@Injectable()
export class LoginService {
    /*private registerURL = 'https://local-sbx.dev.allegiantair.com:8443/mms/api/register';  // URL to web api*/
    private loginURL = 'http://localhost:8081/mms/api/login';  // URL to web api

    constructor(private http:Http) {
    }

    login(model:Login):Observable<Token> {

        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        console.log(body);

        return this.http.post(this.loginURL, body, options)
            //.map(this.extractData)
            .map((res: Response) => res.json() as Token)
            .do(res => console.log("token: " + JSON.stringify(res)))
            .catch(this.handleError);

        /*this.http.post(this.loginURL, body, options)
         .map(res => {
         if (res.status == 401) {
         alert("Not Authorized");
         //throw new Error('This request has failed ' + res.status);
         }
         // If everything went fine, return the response
         else {
         (res:Response) => res.json()
         }

         })
         .do(token => console.log("token: " + JSON.stringify(token)))
         .subscribe(
         data => this.saveToken(data.token),
         err => this.handleError(err),
         () => console.log("Login complete")
         );*/



        /*return this.http.post(this.loginURL, body, options)
            //.map(this.extractData)
            .map((res: Response) => res.json())
            .do(res => console.log("token: " + JSON.stringify(res)))
            .subscribe(
                token => this.saveToken(token.token),
                err => this.handleError(err),
                () => console.log("Login complete")
            );
        */

        //.catch(this.handleError);


        /*return this.http.post(this.registerURL, body, { headers: this.headers })
         .map((res: Response) => res.json());*/

        /*return this.http.post(this.registerURL, body, options)
         .toPromise()
         .then(response => response.json() as Register[])
         .catch(this.handleError);*/
    }

    /*private saveToken(token) {
        localStorage.setItem("token", token);
    }*/

    /*getProfile(id:number):Promise<Profile> {
     return this.getProfiles()
     .then(profiles => profiles.find(profile => profile.id === id));
     }*/

    private extractData(res:Response) {
        let body = res.json();
        console.log("body : " + JSON.stringify(body));
        return body.data || {};
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        if(error.status === 401) {
            alert("Unauthorized");
        }
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}
