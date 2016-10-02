

export class SurveyAnswer {
    constructor(surveyId:number, startTime:string, startTimeEffect:string, peakTime:string, peakLast:number, timeEffectEnd:string, potency:number, potencyStrength:number, eat:boolean) {
        this.surveyId = surveyId;
        this.startTime = startTime;
        this.startTimeEffect = startTimeEffect;
        this.peakTime = peakTime;
        this.peakLast = peakLast;
        this.timeEffectEnd = timeEffectEnd;
        this.potency = potency;
        this.potencyStrength = potencyStrength;
        this.eat = eat;
    }
    surveyId:number;
    startTime:string;
    startTimeEffect:string;
    peakTime:string;
    peakLast:number;
    timeEffectEnd:string;
    potency:number;
    potencyStrength:number;
    eat:boolean;


}

