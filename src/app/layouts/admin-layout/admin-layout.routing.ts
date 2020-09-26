import {Routes} from '@angular/router';

import {CalculateComponent} from '../view/calculate/calculate.component';
import {CartonsComponent} from '../view/cartons/cartons.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'calculate', component: CalculateComponent},
    {path: 'dashboard', component: CartonsComponent}
];
