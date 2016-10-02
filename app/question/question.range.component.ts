@Component({
    selector: 'question-range',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})
export class QuestionRange {
    id:number;
    category:string;
    lower:number;
    upper:number;

}
