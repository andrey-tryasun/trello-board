import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../../../services/card';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
    @ViewChild('content') modalContent: ElementRef;
    @Output() updateCard = new EventEmitter();
    @Output() deleteCard = new EventEmitter();

    modalReference: any;
    modalTitle: string;

    id: number;
    listId: number;
    title: string;
    description: string;
    dueDate: NgbDateStruct;

    constructor(
        private modalService: NgbModal
    ) {
    }

    edit(card: Card): void {
        this.modalTitle = 'Card Details';
        this.id = card.id;
        this.listId = card.listId;
        this.title = card.title;
        this.description = card.description;
        if (card.dueDate) {
            const date = new Date(card.dueDate);
            this.dueDate = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()
            };
        }
        this.modalReference = this.modalService.open(this.modalContent, {
            centered: false,
            backdrop: 'static',
            keyboard: true,
            size: 'sm'
        });
    }

    update(): void {
        const date = this.dueDate ?
            Date.UTC(
                this.dueDate.year,
                this.dueDate.month - 1,
                this.dueDate.day,
                0,
                0,
                0,
                0)
            : null;
        const card = new Card({
            id: this.id,
            listId: this.listId,
            title: this.title,
            description: this.description,
            dueDate: date
        });
        this.modalReference.close();
        this.updateCard.emit(card);
    }

    delete(): void {
        this.modalReference.close();
        this.deleteCard.emit(this.id);
    }
}
