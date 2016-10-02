import { Component }        from '@angular/core';
import { Register }         from './register';
import { RegisterService }  from './register.service';
/*import { OnInit }           from '@angular/core';*/
import { Router }           from '@angular/router';

@Component({
    /*selector: 'register',*/
    templateUrl: 'app/register/register.component.html'
})
export class RegisterComponent {
    /*model:Register;*/
    submitted = false;

    constructor(private router:Router,
                private registerService:RegisterService) {
    }

    model = new Register("", "", "");

    onSubmit() {
        let register: Register = this.registerService.register(this.model).subscribe();

        //this.model = register;
        this.submitted = true;
        //model = new Register("", "", "");
    }

    /*register():void {
     //this.profileService.getProfiles().then(profiles => this.profiles = profiles);
     this.registerService.register();
     }*/

    get diagnostic() {
        return JSON.stringify(this.model);
    }


}




