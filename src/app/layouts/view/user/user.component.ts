import {Component, Input, OnInit} from '@angular/core';
import {ComboItem} from '../../../util/combo-box/combo-box.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    itemList = [{id: 1, value: 'carrot'}, {id: 1, value: 'banana'}, {id: 1, value: 'apple'}, {id: 1, value: 'potato'}, {
        id: 1,
        value: 'tomato'
    }, {id: 1, value: 'cabbage'}, {id: 1, value: 'turnip'}, {id: 1, value: 'okra'}, {id: 1, value: 'onion'}, {
        id: 1,
        value: 'cherries'
    }, {id: 1, value: 'plum'}, {id: 1, value: 'mango'}];
    private selectedItem: ComboItem;
    constructor() {
    }

    ngOnInit() {
    }

    setSelectedCarton(date: any): void {
        this.selectedItem = date;
    }

    logSelected(): void {
        console.log(this.selectedItem);
    }

}
