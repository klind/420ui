import {QuestionRange} from "./../question/question.range";
export class Profile {

    id: number;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    gender: string;
    weight: number;
    onPrescriptionMeds: boolean;
    vegetarian: boolean;
    avgOunceMeatDay: number;
    avgSexWeek: number;
    avgHoursSweatWeek: number;
    avgOuncePotThcWeek: number;
    preferSalivas: boolean;
    children: boolean;
    geneticItems: boolean;
    hotColdNormal: string;
    amountNicotineDay: number;
    hadMenopause: boolean;
    ageRange: number;
    sleep: number;
    caffeineDrinks: number;
    bowelMovement: number;
    activityLevel: number;
    bodyfat: number;


    constructor(email: string) {
        this.email = email;
    }

    /*constructor(id: number, email: string, firstName: string, middleName: string, lastName: string, phone: string, gender: string, weight: number, onPrescriptionMeds: boolean, vegetarian: boolean, avgOunceMeatDay: number, avgSexWeek: number, avgHoursSweatWeek: number, avgOuncePotThcWeek: number, preferSalivas: boolean, children: boolean, geneticItems: boolean, hotColdNormal: string, amountNicotineDay: number, hadMenopause: boolean, ageRange: number, sleep: number, caffeineDrinks: number, bowelMovement: number, activityLevel: number, bodyfat: number) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.phone = phone;
        this.gender = gender;
        this.weight = weight;
        this.onPrescriptionMeds = onPrescriptionMeds;
        this.vegetarian = vegetarian;
        this.avgOunceMeatDay = avgOunceMeatDay;
        this.avgSexWeek = avgSexWeek;
        this.avgHoursSweatWeek = avgHoursSweatWeek;
        this.avgOuncePotThcWeek = avgOuncePotThcWeek;
        this.preferSalivas = preferSalivas;
        this.children = children;
        this.geneticItems = geneticItems;
        this.hotColdNormal = hotColdNormal;
        this.amountNicotineDay = amountNicotineDay;
        this.hadMenopause = hadMenopause;
        this.ageRange = ageRange;
        this.sleep = sleep;
        this.caffeineDrinks = caffeineDrinks;
        this.bowelMovement = bowelMovement;
        this.activityLevel = activityLevel;
        this.bodyfat = bodyfat;
    }
*/

}
