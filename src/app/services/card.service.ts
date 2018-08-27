import { Injectable } from '@angular/core';
import { List } from './list';
import { Card } from './card';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor() {
    }

    addCard(lists: List[], id: number): List[] {
        const newCard = new Card();
        lists.find(item => item.id === id).cards.push(newCard);
        return lists;
    }

}
