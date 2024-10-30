import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        
        component: HomeComponent,
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent,
    }
];
