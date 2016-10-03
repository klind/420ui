import {Injectable}                               from '@angular/core';
import {Headers, Http, RequestOptions, Response}  from '@angular/http';
import {Observable}                               from 'rxjs/Observable';
import {QuestionRange}                            from '../question/question.range';

import 'rxjs/add/operator/toPromise';

import {Profile} from './profile';

/*import { PROFILES } from '../mock-profiles';*/

@Injectable()
export class ProfileService {
    private profilesURL = 'http://localhost:8080/mmsservice/api/profiles';  // URL to web api
    constructor(private http: Http) {
    }

    saveProfile(model: Profile) {
        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let body = JSON.stringify(model);

        return this.http.post(this.profilesURL, body, options)
            .map((res: Response) => res.json() as Profile)
            .catch(this.handleError);

    }

    getProfileByEmail(email: string): Observable<Profile> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.profilesURL + "/email/" + email, options)
            .map((res: Response) => res.json() as Profile)
            .do(res => console.log("Profile: " + JSON.stringify(res)))
            .catch(this.handleError);
    }

    getProfileById(id: number): Observable<Profile> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.profilesURL + "/" + id, options)
            .map((res: Response) => res.json() as Profile)
            .do(res => console.log("Profile: " + JSON.stringify(res)))
            .catch(this.handleError);
    }


    getProfile(): Observable<Profile> {

        let token = localStorage.getItem("token");
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({headers: headers});

        let p: Profile[];

        return this.http.get(this.profilesURL, options)
            .map((res: Response) => res.json())
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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    /*getProfiles():Promise<Profile[]> {

     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     return this.http.get(this.profilesURL, options)
     .map(this.extractData)
     .catch(this.handleError);

     /!*return this.http.get(this.profilesURL, options)
     .map((res) => this.extractData(res))
     .catch((err) => this.handleError(err));*!/


     /!*       return PROFILES;*!/
     /!*return this.http.get(this.profilesURL)
     .toPromise()
     .then(response => response.json().data as Profile[])
     .catch(this.handleError);*!/
     }*/

    /*getProfile(id:number):Promise<Profile> {
     return this.getProfiles()
     .then(profiles => profiles.find(profile => profile.id === id));
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
