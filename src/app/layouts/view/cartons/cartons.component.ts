import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartonService} from '../../../services/carton.service';
import {Subject} from 'rxjs';

declare interface TableData {
    headerRow: string[];
    dataRows: CartonDTO[];
}

@Component({
    selector: 'app-tables',
    templateUrl: './cartons.component.html',
    styleUrls: ['./cartons.component.css']
})
export class CartonsComponent implements OnDestroy, OnInit {
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
