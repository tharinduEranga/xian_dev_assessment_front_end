import {Component, Input, OnInit} from '@angular/core';
import {ComboItem} from '../../../util/combo-box/combo-box.component';
import {CartonService} from '../../../services/carton.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    cartonList = [];
    private selectedItem: ComboItem;

    constructor(private cartonService: CartonService) {
    }

    ngOnInit() {
        this.getCartonNames();
    }

    setSelectedCarton(date: any): void {
        this.selectedItem = date;
    }

    logSelected(): void {
        console.log(this.selectedItem);
    }

    private getCartonNames() {
        this.cartonList = [];
        this.cartonService.getCartonNames().subscribe(value => {
            const cartonConvertedResponse = [];
            value.content.forEach(carton => cartonConvertedResponse.push({id: carton.id, value: carton.name}));
            this.cartonList = cartonConvertedResponse;
        }, error => {
            Swal.fire('Error occurred!', error.message, 'error');
        });
    }
}
