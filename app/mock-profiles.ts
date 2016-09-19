import { Profile } from './profile/profile';


export const PROFILES: Profile[] = [
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

