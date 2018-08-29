import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private lists: List[] = [];

    constructor() {
    }

    getLists(): List[] {
        return this.lists;
    }

    addList(): List[] {
        this.lists.push(new List({
            id: Date.now(), // generation of a unique id
            title: ''
        }));
        return this.lists;
    }

    deleteList(id: number): List[] {
        this.lists = this.lists.filter(item => item.id !== id);
        return this.lists;
    }

}
