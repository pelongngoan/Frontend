import { RouteConfigLoadEnd, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouterGuardService } from '../services/router-guard.service';


export const MaterialRoutes: Routes = [
    {
        path:'category',
        component:ManageCategoryComponent,
        canActivate:[RouterGuardService],
        data:{
            expectedRole:['admin']
        }
    }
];
