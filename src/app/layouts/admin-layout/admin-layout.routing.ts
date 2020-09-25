import {Routes} from '@angular/router';

import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'dashboard', component: TablesComponent}
];
