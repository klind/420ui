import { Injectable }                               from '@angular/core';
import { Headers, Http, RequestOptions, Response }  from '@angular/http';
import { Observable }                               from 'rxjs/Observable';

import { Answer } from '../survey/answer';

@Injectable()
export class AnswerService {
    private answersURL = 'http://localhost:8081/mms/api/answers';  // URL to web api
    constructor(private http:Http) {
    }


    saveAnswer(model:Answer) {
        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let body = JSON.stringify(model);

        return this.http.post(this.answersURL, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }

    getAnswerByEmail(email:string):Observable<Answer> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.answersURL+"/email/"+email, options)
            .map((res:Response) => res.json() as Answer)
            .do(res => console.log("Answer: " + JSON.stringify(res)))
            .catch(this.handleError);
    }

    getAnswerById(id:number):Observable<Answer> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.answersURL+"/"+id, options)
            .map((res:Response) => res.json() as Answer)
            .do(res => console.log("Answer: " + JSON.stringify(res)))
            .catch(this.handleError);
    }


    getAnswer():Observable<Answer> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let p: Answer[];

        return this.http.get(this.answersURL, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);

            //.do(res => console.log("res: " + JSON.stringify(res)));
            //c.subscribe();


        /*this.http.post(this.answersURL, options)
            .map((res: Response) => res.json())
            .do(res => console.log("res: " + JSON.stringify(res)))
            .subscribe(
                data => this.p = data,
                err => this.handleError(err),
                () => console.log("getAnswers complete")
            );

        return this.p;*/


        /* return this.http.get(this.answersURL)
         .toPromise()
         .then(response => response as Answer[])
         .catch(this.handleError);*/

    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    /*getAnswers():Promise<Answer[]> {

     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     return this.http.get(this.answersURL, options)
     .map(this.extractData)
     .catch(this.handleError);

     /!*return this.http.get(this.answersURL, options)
     .map((res) => this.extractData(res))
     .catch((err) => this.handleError(err));*!/


     /!*       return PROFILES;*!/
     /!*return this.http.get(this.answersURL)
     .toPromise()
     .then(response => response.json().data as Answer[])
     .catch(this.handleError);*!/
     }*/

    /*getAnswer(id:number):Promise<Answer> {
     return this.getAnswers()
     .then(answers => answers.find(answer => answer.id === id));
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
