import { Component, OnInit } from '@angular/core';
import { List } from './services/list';
import { ListService } from './services/list.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public lists: List[];

    constructor(
        private listService: ListService
    ) {
    }

    addList(): void {
        this.lists = this.listService.addList(this.lists);
        console.log(this.lists);
    }

    ngOnInit(): void {
        this.lists = this.listService.getLists();
        console.log(this.lists);
    }
}
