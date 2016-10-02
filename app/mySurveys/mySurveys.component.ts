import {Component}            from '@angular/core';
import {MySurveysService}       from './mySurveys.service';
import {OnInit}               from '@angular/core';
import {Router, ActivatedRoute, Params}               from '@angular/router';
import {Observable}           from 'rxjs/Observable';
import {QuestionRange}        from '../question/question.range';
import {map}                  from "rxjs/operator/map";
import {MySurvey} from "./mySurvey";


@Component({
    selector: 'survey',
    templateUrl: 'app/mySurveys/mySurveys.component.html'
})
export class MySurveysComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private mySurveysService: MySurveysService) {
    }

    surveys: MySurvey[];

    ngOnInit(): void {

        let token = localStorage.getItem("token");
        let id = localStorage.getItem("userId");

        if (token != null && id != null) {
            this.mySurveysService.getSurveyByLoggedInUserId().subscribe(
                p => this.surveys = p
            );
        }
    }


}




