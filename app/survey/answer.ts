import { SurveyAnswer }        from './surveyAnswer';

export class Answer {
    constructor(id: number, surveyAnswer: SurveyAnswer, profileId: number, surveyId: number, questionId: number, questionRangeId: number) {
        this.id = id;
        this.surveyAnswer = surveyAnswer;
        this.profileId = profileId;
        this.surveyId = surveyId;
        this.questionId = questionId;
        this.questionRangeId = questionRangeId;
    }
    id:number;
    surveyAnswer:SurveyAnswer;
    profileId:number;
    surveyId:number;
    questionId:number;
    questionRangeId:number;


}
