import {Injectable}                               from '@angular/core';
import {Headers, Http, RequestOptions, Response}  from '@angular/http';
import {Observable}                               from 'rxjs/Observable';

import {MySurvey} from './mySurvey';

@Injectable()
export class MySurveysService {
    private surveysURL = 'http://localhost:8080/mmsservice/api/mysurveys';  // URL to web api
    constructor(private http: Http) {
    }

    surveys:Observable<MySurvey[]>;

    getSurveyByLoggedInUserId(): Observable<MySurvey[]> {

        let token = localStorage.getItem("token");
        let id = localStorage.getItem("userId");

        if (token != null && id != null) {
            let headers = new Headers({'Content-Type': 'application/json'});
            headers.append('Authorization', 'Bearer ' + token);
            headers.append('userId', id);
            let options = new RequestOptions({headers: headers});
            return this.http.get(this.surveysURL, options)
                .map((res: Response) => res.json() as MySurvey[])
                .do(res => console.log("Survey: " + JSON.stringify(res)))
                .catch(this.handleError);
        } else {
            return this.surveys;
        }
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
