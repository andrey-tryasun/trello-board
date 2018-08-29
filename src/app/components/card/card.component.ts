import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../services/card';
import { CardService } from '../../services/card.service';
import { CardDetailsComponent } from './card-details/card-details.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() listId: number;
    @ViewChild(CardDetailsComponent) cardDetailsComponent: CardDetailsComponent;

    cards: Card[];

    todayDate: number = Date.now();   // Date in milliseconds
    oneDay = 1000 * 60 * 60 * 24;
    tomorrow: number = 1000 * 3600 * 24;    // Tomorrow in milliseconds
    afterTomorrow: number = 1000 * 3600 * 24 * 2;   // Day after tomorrow in milliseconds

    constructor(
        private cardService: CardService,
    ) {
    }

    addCard(): void {
        this.cards = this.cardService.addCard(this.listId);
    }

    editCard(card: Card): void {
        this.cardDetailsComponent.edit(card);
    }

    updateCard(card: Card): void {
        this.cards = this.cardService.updateCard(card);
    }

    deleteCard(id: number): void {
        this.cards = this.cardService.deleteCard(id);
    }

    ngOnInit(): void {
        this.cards = this.cardService.getCards();
    }
}
