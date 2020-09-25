import {Component, OnInit, ViewChild} from '@angular/core';
import {CartonService} from '../services/carton.service';
import Swal from 'sweetalert2';

declare interface TableData {
    headerRow: string[];
    dataRows: CartonDTO[];
}

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public cartonTable: TableData;

    constructor(private cartonService: CartonService) {
    }

    ngOnInit() {
        this.initTableColumns();
        this.getAllCartons();
    }

    private getAllCartons() {
        // this.isLoading = true;
        this.cartonService.getAll().subscribe(value => {
            this.cartonTable.dataRows = value.content;
        }, error => {
            Swal.fire('Error occurred!', error.message, 'error');
        });
    }

    private initTableColumns() {
        this.cartonTable = {
            headerRow: ['ID', 'Name', 'Units', 'Price'],
            dataRows: []
        };
    }
}
