import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../services/list';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    lists: List[];

    constructor(
        private listService: ListService,
    ) {
    }

    addList(): void {
        this.lists = this.listService.addList();
    }

    deleteList(id: number): void {
        this.lists = this.listService.deleteList(id);
    }

    ngOnInit(): void {
        this.lists = this.listService.getLists();
    }

}
