import { Injectable }                               from '@angular/core';
import { Headers, Http, RequestOptions, Response }  from '@angular/http';
import { Observable }                               from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { QuestionRange } from './question.range';

/*import { PROFILES } from '../mock-profiles';*/

@Injectable()
export class QuestionRangesService {
    private questionRangesURL = 'http://localhost:8080/mms/api/questionranges';  // URL to web api
    constructor(private http:Http) {
    }

    getQuestionRangesByCat(cat:string):Observable<QuestionRange[]> {

        let token = localStorage.getItem("token");

        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        /*return this.http.get(this.profilesURL, options)
         .then(response => response.json() as Profile[])
         .catch(this.handleError);*/

        /*let p: Profiles[];*/

        return this.http.get(this.questionRangesURL, options)
            //.flatMap((response) => response.json() as QuestionRange)
            .map((res:Response) => res.json() as QuestionRange[])
            .catch(this.handleError);

        //.do(res => console.log("res: " + JSON.stringify(res)));
        //c.subscribe();


        /*this.http.post(this.profilesURL, options)
         .map((res: Response) => res.json())
         .do(res => console.log("res: " + JSON.stringify(res)))
         .subscribe(
         data => this.p = data,
         err => this.handleError(err),
         () => console.log("getProfiles complete")
         );

         return this.p;*/


        /* return this.http.get(this.profilesURL)
         .toPromise()
         .then(response => response as Profile[])
         .catch(this.handleError);*/

    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
