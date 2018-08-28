export class List {
    id: number;
    title: string;

    constructor(listData?: List) {
        if (!listData) {
            return;
        }
        this.id = listData.id;
        this.title = listData.title;
    }
}
