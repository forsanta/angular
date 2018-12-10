import { Book } from "../models/Book";
import { CD } from "../models/Cd";

export class CommunsService {
    booksList: Book[] = [
        {
            name: 'Le hero aux mille et un visage',
            author: 'Joseph Campbell',
            isOn: false
        },
        {
            name: 'H2G2',
            author: 'Douglas Adams',
            isOn: false
        },
        {
            name: 'Le seigneur des anneaux',
            author: 'Tolkien',
            isOn: false
        }
    ];

    cdsList: CD[] = [
        {
            name: 'By the way',
            author: 'Red hot chili peppper',
            isOn: false
        },
        {
            name: 'Space Oddity',
            author: 'David bowie',
            isOn: false
        },
        {
            name: 'La futura',
            author: 'ZZ top',
            isOn: false
        }
    ];
}