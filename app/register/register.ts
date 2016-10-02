import {QuestionRange} from "./../question/question.range.ts";
export class Profile {
     id:number;
     email:string;
     firstName:string;
     middleName:string;
     lastName:string;
     dob:string;
     phone:string;
     gender:string;
     weight:number;
     onPrescriptionMeds:boolean = false;
     vegetarian:boolean = false;
     avgOunceMeatDay:number;
     avgSexWeek:number;
     avgHoursSweatWeek:number;
     avgOuncePotThcWeek:number;
     preferSalivas:boolean = false;
     children:boolean = false;
     geneticItems:boolean = false;
     hotColdNormal:number;
     useNicotine:boolean = false;
     amountNicotineDay:number;
     hadMenopause:boolean = false;
     ageRange: QuestionRange;
     sleep: QuestionRange;
     caffeineDrinks: QuestionRange;
     bowelMovement: QuestionRange;
     activityLevel: QuestionRange;
     bodyfat: QuestionRange;


}
