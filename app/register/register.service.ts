import {Injectable}                               from '@angular/core';
import {Headers, Http, RequestOptions, Response}  from '@angular/http';
import {Observable}                               from 'rxjs/Observable';
import {Register}                                 from './register';
import {Token}                                    from "../shared/token";
/*import 'rxjs/add/operator/toPromise';*/
/*import './rxjs-operators';*/

@Injectable()
export class RegisterService {
    /*private registerURL = 'https://local-sbx.dev.allegiantair.com:8443/mms/api/register';  // URL to web api*/
    private registerURL = 'http://localhost:8080/mms/api/register';  // URL to web api
    constructor(private http: Http) {
    }

    register(model: Register): Observable<Token> {

        let body = JSON.stringify(model);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        console.log(body);

        return this.http.post(this.registerURL, body, options)
            .map((res: Response) => res.json() as Token)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
