import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import {QuestionRange}          from "./question.range";

@Component({
    selector: 'question-range',
    templateUrl: 'app/question/question.range.component.html'
})
export class QuestionRangeComponent {
    model = new QuestionRange();

}
