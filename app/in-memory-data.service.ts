import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
         {id: 11, name: 'Mr. Nice'},
         {id: 12, name: 'Narco'},
         {id: 13, name: 'Bombasto'},
         {id: 14, name: 'Celeritas'},
         {id: 15, name: 'Magneta'},
         {id: 16, name: 'RubberMan'},
         {id: 17, name: 'Dynama'},
         {id: 18, name: 'Dr IQ'},
         {id: 19, name: 'Magma'},
         {id: 20, name: 'Tornado'}
         ];
         return {heroes};

        /*let profile = [
            {
                "id": 1,
                "email": "john.doe@mmj.com",
                "firstName": "John",
                "middleName": "Y",
                "lastName": "Doe",
                "dob": "1970-01-01",
                "phone": "702-555-5555",
                "gender": "M",
                "weight": 180,
                "onPrescriptionMeds": true,
                "vegetarian": false,
                "avgOunceMeatDay": 5,
                "avgSexWeek": 5,
                "avgHoursSweatWeek": 5,
                "avgOuncePotThcWeek": 0,
                "preferSalivas": false,
                "children": false,
                "geneticItems": false,
                "hotColdNormal": 3,
                "useNicotine": true,
                "amountNicotineDay": 1,
                "hadMenopause": false,
                "ageRange": {
                    "id": 3,
                    "category": "AGE_RANGE",
                    "lower": 36,
                    "upper": 45
                },
                "sleep": {
                    "id": 8,
                    "category": "SLEEP",
                    "lower": 8,
                    "upper": 8
                },
                "caffeineDrinks": {
                    "id": 12,
                    "category": "CAFFEINE_DRINKS",
                    "lower": 2,
                    "upper": 2
                },
                "bowelMovement": {
                    "id": 18,
                    "category": "BOWEL_MOVEMENTS",
                    "lower": 2,
                    "upper": 2
                },
                "activityLevel": {
                    "id": 23,
                    "category": "ACTIVITY_LEVEL",
                    "lower": 2,
                    "upper": 2
                },
                "bodyfat": {
                    "id": 28,
                    "category": "BODY_FAT_MALE",
                    "lower": 15,
                    "upper": 20
                }
            }
        ];
        return {profile};*/


    }
}
