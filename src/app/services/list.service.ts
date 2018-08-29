import { Injectable } from '@angular/core';
import { List } from './list';
import { Card } from './card';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private lists: List[] = [];
    private cards: Card[] = [];

    constructor() {
    }

    getLists(): List[] {
        console.log('getLists', this.lists);
        return this.lists;
    }

    addList(): List[] {
        this.lists.push(new List({
            id: Date.now(), // generation of a unique id
            title: ''
        }));
        console.log('addList', this.lists);
        return this.lists;
    }

    deleteList(id: number): List[] {
        this.lists = this.lists.filter(item => item.id !== id);
        console.log('deleteList', this.lists);
        return this.lists;
    }

    getCards(list: List): Card[] {
        if (this.cards.length) {
            this.cards = this.cards.filter(item => item.listId === list.id);
        }
        console.log('getCards for ', list.id, this.cards);
        return this.cards;
    }

    addCard(list: List): Card[] {
        this.cards.push(new Card({
            id: Date.now(), // generation of a unique id
            listId: list.id,
            title: '',
            description: '',
            dueDate: null
        }));
        console.log('addCard', this.cards);
        return this.cards;
    }

    deleteCard(id: number): Card[] {
        this.cards = this.cards.filter(item => item.id !== id);
        console.log('deleteCard', this.cards);
        return this.cards;
    }

    updateCard(card: Card): Card[] {
        const card1 = this.cards.find(item => item.id === card.id);
        console.log(card1);
        card1.title = card.title;
        card1.description = card.description;
        card1.dueDate = card.dueDate;
        return this.cards;
    }
}

