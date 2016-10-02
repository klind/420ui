import { Injectable }                               from '@angular/core';
import { Headers, Http, RequestOptions, Response }  from '@angular/http';
import { Observable }                               from 'rxjs/Observable';

import { Survey } from './survey';

@Injectable()
export class SurveyService {
    private surveysURL = 'http://localhost:8080/g4tc/v1/api/surveys';  // URL to web api
    constructor(private http:Http) {
    }


    saveSurvey(model:Survey) {
        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let body = JSON.stringify(model);

        return this.http.post(this.surveysURL, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }

    getSurveyByEmail(email:string):Observable<Survey> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.surveysURL+"/email/"+email, options)
            .map((res:Response) => res.json() as Survey)
            .do(res => console.log("token: " + JSON.stringify(res)))
            .catch(this.handleError);
    }

    getSurveyById(id:number):Observable<Survey> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.surveysURL+"/"+id, options)
            .map((res:Response) => res.json() as Survey)
            .do(res => console.log("token: " + JSON.stringify(res)))
            .catch(this.handleError);
    }


    getSurvey():Observable<Survey> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let p: Survey[];

        return this.http.get(this.surveysURL, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);

            //.do(res => console.log("res: " + JSON.stringify(res)));
            //c.subscribe();


        /*this.http.post(this.surveysURL, options)
            .map((res: Response) => res.json())
            .do(res => console.log("res: " + JSON.stringify(res)))
            .subscribe(
                data => this.p = data,
                err => this.handleError(err),
                () => console.log("getSurveys complete")
            );

        return this.p;*/


        /* return this.http.get(this.surveysURL)
         .toPromise()
         .then(response => response as Survey[])
         .catch(this.handleError);*/

    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    /*getSurveys():Promise<Survey[]> {

     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     return this.http.get(this.surveysURL, options)
     .map(this.extractData)
     .catch(this.handleError);

     /!*return this.http.get(this.surveysURL, options)
     .map((res) => this.extractData(res))
     .catch((err) => this.handleError(err));*!/


     /!*       return PROFILES;*!/
     /!*return this.http.get(this.surveysURL)
     .toPromise()
     .then(response => response.json().data as Survey[])
     .catch(this.handleError);*!/
     }*/

    /*getSurvey(id:number):Promise<Survey> {
     return this.getSurveys()
     .then(surveys => surveys.find(survey => survey.id === id));
     }*/

    /*private extractData(res:Response) {
     let body = res.json();
     return body.data || {};
     }

     private handleError(error:any) {
     // In a real world app, we might use a remote logging infrastructure
     // We'd also dig deeper into the error to get a better message
     let errMsg = (error.message) ? error.message :
     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
     console.error(errMsg); // log to console instead
     return Observable.throw(errMsg);
     }*/

    private headers = new Headers({'Content-Type': 'application/json'});


}
