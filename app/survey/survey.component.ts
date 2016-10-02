import { Component }            from '@angular/core';
import { Profile }              from './profile';
import { ProfileService }       from './profile.service';
import { OnInit }               from '@angular/core';
import { Router, ActivatedRoute, Params }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { QuestionRange }        from '../question/question.range';
import { map }                  from "rxjs/operator/map";

@Component({
    selector: 'profile',
    templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {

    constructor(private route:ActivatedRoute,
                private router:Router,
                private profileService:ProfileService) {
    }


    model:Profile;
    /* null, // id
     "hi@gmail.com",
     "John",
     null,
     "Doe",
     "7024555454",
     "M", // gender
     200, // weight
     false, // onPrescriptionMeds
     false, // vegetarian
     5, // avgOunceMeatDay
     3, // avgSexWeek
     10, // avgHoursSweatWeek
     3, // avgOuncePotThcWeek
     false, // preferSalivas
     true, // children
     false, // geneticItems
     "N", // hotColdNormal
     1, // amountNicotineDay
     false, // hadMenopause
     3, // ageRange
     3, // sleep
     3, // caffeineDrinks
     3, // bowelMovement
     3, // activityLevel
     3); // bodyfat*/


    onSubmit() {
        this.profileService.saveProfile(this.model)
            .subscribe();
    }

    /*getProfiles():void {
     //this.profileService.getProfiles().then(profiles => this.profiles = profiles);
     //this.profiles = this.profileService.getProfiles();
     this.profileService.getProfiles().subscribe(
     p => this.profiles = p
     );
     }*/

    ngOnInit():void {


        //let email = this.route.snapshot.params['email'];
        //console.log("wow : " + email);

   /*     this.route.params.subscribe(params => {

            let email = params['email'];
            console.log("email1 " + email);

            // Retrieve Pet with Id route param

        });


        this.route.queryParams.subscribe(
            (param: any) => {
                let email = param['email'];
                console.log("email2 " + email);
            });*/


        this.route.params
            .subscribe(params => {
                let id = params['id'];
                console.log("id " + id);
                this.profileService.getProfileById(id)
                .subscribe(
                    p => this.model = p,
                    err => this.handleError(err),
                    () => console.log("getting profile complete")
                );
        });

        /*this.route.params.forEach((params:Params) => {
            let email = params['email'];


            this.profileService.getProfileByEmail(email)
                .subscribe(
                    p => this.model = p,
                    err => this.handleError(err),
                    () => console.log("Login complete")
                );
        });*/


    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        if (error.status === 401) {
            alert("Unauthorized");
        }
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return Observable.throw(errMsg);
    }

}




