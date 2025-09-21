import { Routes } from '@angular/router';
import { Step1DataRenderer } from './components/step1-data-renderer/step1-data-renderer';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component: Step1DataRenderer
    }
];
