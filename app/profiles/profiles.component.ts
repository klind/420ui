import { Component }            from '@angular/core';
import { Profile }              from './profile';
import { ProfileService }       from './profile.service';
import { OnInit }               from '@angular/core';
import { Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
@Component({
    selector: 'profiles',
    templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {
    profiles: Profile[];


    constructor(private router:Router,
                private profileService:ProfileService) {
    }

    getProfiles():void {
        //this.profileService.getProfiles().then(profiles => this.profiles = profiles);
        //this.profiles = this.profileService.getProfiles();
        this.profileService.getProfiles().subscribe(
            p => this.profiles = p
        );
    }

    ngOnInit():void {
        this.getProfiles();
    }


}




