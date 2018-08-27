import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor() {
    }

    getLists(): List[] {
        return [];
    }

    addList(lists: List[]): List[] {
        const newList = new List();
        lists.push(newList);
        return lists;
    }
}
