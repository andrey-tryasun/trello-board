import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../services/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() cards: Card[];

    todayDate: number;

    constructor() {
    }

    ngOnInit() {
        this.todayDate = Date.now();
    }

}
