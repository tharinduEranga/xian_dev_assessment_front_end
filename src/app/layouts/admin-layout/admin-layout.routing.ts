import {Routes} from '@angular/router';

import {UserComponent} from '../view/user/user.component';
import {TablesComponent} from '../view/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'dashboard', component: TablesComponent}
];
