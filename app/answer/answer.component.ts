import {Component}            from '@angular/core';
import {Answer}              from '../survey/answer';
import {AnswerService}       from './answer.service';
import {OnInit}               from '@angular/core';
import {Router, ActivatedRoute, Params}               from '@angular/router';
import {Observable}           from 'rxjs/Observable';
import {QuestionRange}        from '../question/question.range';
import {map}                  from "rxjs/operator/map";


@Component({
    selector: 'answer',
    templateUrl: 'app/answer/answer.component.html'
})
export class AnswerComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private answerService: AnswerService) {
    }

    model: Answer;// = new Answer(null, "Answer 1", "10:00AM", "11:00AM", "11:30AM", 30, "12:00PM", 3, 2, true);

    onSubmit() {
        console.log(JSON.stringify(this.model))
        this.answerService.saveAnswer(this.model)
            .subscribe();
    }

    ngOnInit(): void {



        /*this.route.params
            .subscribe(params => {
                let id = params['id'];
                console.log("id " + id);
                this.answerService.getAnswerById(id)
                    .subscribe(
                        p => this.model = p,
                        err => this.handleError(err),
                        () => console.log("getting answer complete")
                    );
            });*/


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




