export class Card {
    id: number;
    listId: number;
    title: string;
    description: string;
    dueDate: number;

    constructor(cardData?: Card) {
        if (!cardData) {
            return;
        }
        this.id = cardData.id;
        this.listId = cardData.listId;
        this.title = cardData.title;
        this.description = cardData.description;
        this.dueDate = cardData.dueDate;
    }
}
