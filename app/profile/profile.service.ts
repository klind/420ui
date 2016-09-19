import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';

import { PROFILES } from '../mock-profiles';

@Injectable()
export class ProfileService {
    private profilesURL = 'app/profile';  // URL to web api
    constructor(private http:Http) {
    }

    getProfiles():Profile[] {
        return PROFILES;
        /*return this.http.get(this.profilesURL)
            .toPromise()
            .then(response => response.json().data as Profile[])
            .catch(this.handleError);*/
    }

    /*getProfile(id:number):Promise<Profile> {
        return this.getProfiles()
            .then(profiles => profiles.find(profile => profile.id === id));
    }*/

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});


}
