import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

    {
        path: 'inicio',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),

    },

    {
        path: 'iniciar-sesion', component:LoginComponent
        //loadComponent: () => import('./business/planes/planes.component'),

    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'planes',
        loadComponent: () => import('./business/planes/planes.component'),
    },
    // {
    //     path: 'customers',
    //     loadComponent: () => import('./../app/business/customers/customers.component'),
    // },
    // {
    //     path: 'orders',
    //     loadComponent: () => import('./../app/business/orders/orders.component'),
    // },
    // {
    //     path: '',
    //     redirectTo: '/planes',
    //     pathMatch: 'full'
    // }
   
];
