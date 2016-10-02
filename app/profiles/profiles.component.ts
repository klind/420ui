import { Component }            from '@angular/core';
import { Profile }              from '../profile/profile';
import { ProfilesService }      from './profiles.service';
import { OnInit }               from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import { Router }               from '@angular/router';
@Component({
    selector: 'profiles',
    templateUrl: 'app/profiles/profiles.component.html'
})
export class ProfilesComponent implements OnInit {
    profiles: Profile[];


    constructor(private router:Router,
                private profilesService:ProfilesService) {
    }

    getProfiles():void {
        //this.profileService.getProfiles().then(profiles => this.profiles = profiles);
        //this.profiles = this.profileService.getProfiles();
        this.profilesService.getProfiles().subscribe(
            p => this.profiles = p
        );
    }

    ngOnInit():void {
        this.getProfiles();
    }


}




