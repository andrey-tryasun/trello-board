import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../../../services/card';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
    @ViewChild('content') modalContent: ElementRef;
    @Output() submitCard = new EventEmitter();

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
        console.log('edit card', card);
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
                day: date.getDay()
            };
        }
        this.modalReference = this.modalService.open(this.modalContent, {
            centered: true,
            backdrop: 'static',
            keyboard: true
        });
    }

    submit(): void {
        const date = Date.UTC(
            this.dueDate.year,
            this.dueDate.month - 1,
            this.dueDate.day,
            0,
            0,
            0, 0);
        const card = new Card({
            id: this.id,
            listId: this.listId,
            title: this.title,
            description: this.description,
            dueDate: date
        });
        this.modalReference.close();
        this.submitCard.emit(card);
    }

    ngOnInit() {
    }

}
