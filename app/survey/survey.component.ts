import {Component}            from '@angular/core';
/*import {NgModule}               from '@angular/core';*/
import {Survey}              from './survey';
import {SurveyService}       from './survey.service';
import {OnInit}               from '@angular/core';
import {Router, ActivatedRoute, Params}               from '@angular/router';
import {Observable}           from 'rxjs/Observable';
import {QuestionRange}        from '../question/question.range';
import {map}                  from "rxjs/operator/map";
import {Answer}                 from "./answer";

//import {NKDatetime} from 'ng2-datetime/ng2-datetime';

@Component({
    selector: 'survey',
    templateUrl: 'app/survey/survey.component.html'
})
export class SurveyComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private surveyService: SurveyService) {
    }

    model = new Answer();// = new Survey(null, "Survey 1", "10:00AM", "11:00AM", "11:30AM", 30, "12:00PM", 3, 2, true);

    servey: Survey;

    onSubmit() {
        console.log(JSON.stringify(this.model))
        this.surveyService.saveSurveyAnswer(this.model)
            .subscribe(
                res => this.gotoMySurveys(),
                err => this.handleError(err),
                () => console.log("saving survey answer complete")
            );
    }

    ngOnInit(): void {

        this.route.params
            .subscribe(params => {
                let id = params['id'];
                console.log("id " + id);
                this.surveyService.getSurveyById(id)
                    .subscribe(
                        res => this.createAnswer(res.id, res.name),
                        err => this.handleError(err),
                        () => console.log("getting survey complete")
                    );
            });
    }

    private createAnswer(id: number, name: string) {
        this.model = new Answer();
        this.model.surveyId = id;
        this.model.surveyAnswer.surveyId = id;
        this.model.surveyAnswer.name = name;
        this.model.profileId = localStorage.getItem("userId");
        //console.log("Created Answer : " + JSON.stringify(this.model));
     }

    gotoMySurveys(): void {
        let link = ['/mysurveys'];
        //console.log("Routing to /surveys/"+id);
        this.router.navigate(link);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    private handleError(error: any) {
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




