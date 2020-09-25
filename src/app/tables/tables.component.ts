import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartonService} from '../services/carton.service';
import Swal from 'sweetalert2';
import {Subject} from 'rxjs';

declare interface TableData {
    headerRow: string[];
    dataRows: CartonDTO[];
}

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnDestroy, OnInit {
    public cartonTable: TableData;

    dtOptions: DataTables.Settings = {};
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<CartonDTO> = new Subject();

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
            // Calling the DT trigger to manually render the table
            this.dtTrigger.next();
        }, error => {
            Swal.fire('Error occurred!', error.message, 'error');
        });
    }

    private initTableColumns() {
        this.cartonTable = {
            headerRow: ['ID', 'Name', 'Units', 'Price'],
            dataRows: []
        };
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

}
