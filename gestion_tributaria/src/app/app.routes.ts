import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'planes',
        loadComponent: () => import('./business/planes/planes.component'),
    },
    {
        path: 'customers',
        loadComponent: () => import('./../app/business/customers/customers.component'),
    },
    {
        path: 'orders',
        loadComponent: () => import('./../app/business/orders/orders.component'),
    },
    {
        path: '',
        redirectTo: '/planes',
        pathMatch: 'full'
    }
];
