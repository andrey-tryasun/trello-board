import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../services/card';
import { List } from '../../services/list';
import { ListService } from '../../services/list.service';
import { CardDetailsComponent } from './card-details/card-details.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() list: List;
    @ViewChild(CardDetailsComponent) cardDetailsComponent: CardDetailsComponent;

    cards: Card[];

    todayDate: number = Date.now();
    oneDay: number = 1000 * 3600 * 24;
    moreDay: number = 1000 * 3600 * 24 * 2;

    constructor(
        private listService: ListService,
    ) {
    }

    addCard(): void {
        this.cards = this.listService.addCard(this.list);
    }

    editCard(card: Card): void {
        this.cardDetailsComponent.edit(card);
    }

    updateCard(card: Card): void {
        this.cards = this.listService.updateCard(card);
    }

    deleteCard(id: number): void {
        this.cards = this.listService.deleteCard(id);
    }

    ngOnInit(): void {
        this.cards = this.listService.getCards(this.list);
    }

}
