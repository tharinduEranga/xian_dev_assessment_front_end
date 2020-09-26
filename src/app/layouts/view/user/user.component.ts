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
    private noOfInputCartons = 0;
    private noOfInputUnits = 0;
    private calculateResult = '';

    constructor(private cartonService: CartonService) {
    }

    ngOnInit() {
        this.getCartonNames();
    }

    setSelectedCarton(carton: ComboItem): void {
        this.cartonService.search(carton.id).subscribe(value => {
            this.selectedItem = value.content;
        });
    }

    logSelected(): void {
        if (this.selectedItem === undefined || this.selectedItem.id === undefined || this.selectedItem.id <= 0) {
            Swal.fire('No product is selected!', 'Please select a product carton above', 'warning');
            return;
        }
        const calculateReq = {
            cartonId: this.selectedItem.id,
            cartonCount: this.noOfInputCartons,
            unitCount: this.noOfInputUnits
        };
        this.cartonService.calculate(calculateReq).subscribe(value => {
            this.calculateResult = 'Cost for the units is : ' + value.content;
        });
    }

    private getCartonNames() {
        this.cartonList = [];
        this.cartonService.getCartonNames().subscribe(value => {
            const cartonConvertedResponse = [];
            value.content.forEach(carton => cartonConvertedResponse.push({id: carton.id, value: carton.name}));
            this.cartonList = cartonConvertedResponse;
        });
    }
}
