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
    private selectedItem: CartonDTO = {} as CartonDTO;

    constructor(private cartonService: CartonService) {
    }

    ngOnInit() {
        this.getCartonNames();
    }

    setSelectedCarton(carton: ComboItem): void {
        this.cartonService.search(carton.id).subscribe(value => {
            this.selectedItem = value.content;
        }, error => {
            Swal.fire('Error occurred!', error.message, 'error');
        });
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
