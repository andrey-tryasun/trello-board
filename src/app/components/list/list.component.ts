import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../services/list';
import { CardService } from '../../services/card.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() lists: List[];

    constructor(
        private listService: ListService,
        private cardService: CardService
    ) {
    }

    addCard(id: number): void {
        this.lists = this.cardService.addCard(this.lists, id);
    }

    ngOnInit() {
    }

}
