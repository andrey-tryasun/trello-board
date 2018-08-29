import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private cards: Card[] = [];

    constructor() {
    }

    getCards(): Card[] {
        return this.cards;
    }

    addCard(listId: number): Card[] {
        this.cards.push(new Card({
            id: Date.now(), // generation of a unique id
            listId: listId,
            title: '',
            description: '',
            dueDate: null
        }));
        return this.cards;
    }

    deleteCard(id: number): Card[] {
        this.cards = this.cards.filter(item => item.id !== id);
        return this.cards;
    }

    updateCard(card: Card): Card[] {
        const updatedCard = this.cards.find(item => item.id === card.id);
        updatedCard.title = card.title;
        updatedCard.description = card.description;
        updatedCard.dueDate = card.dueDate;
        return this.cards;
    }
}
