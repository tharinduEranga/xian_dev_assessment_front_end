import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LbdModule} from '../../lbd/lbd.module';
import {NguiMapModule} from '@ngui/map';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {UserComponent} from '../view/user/user.component';
import {TablesComponent} from '../view/tables/tables.component';
import {DataTablesModule} from 'angular-datatables';
import {ComboBoxComponent} from '../../util/combo-box/combo-box.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
        DataTablesModule
    ],
    declarations: [
        UserComponent,
        TablesComponent,
        ComboBoxComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminLayoutModule {
}
