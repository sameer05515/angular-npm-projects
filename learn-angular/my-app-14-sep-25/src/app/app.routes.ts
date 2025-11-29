import { Routes } from '@angular/router';
import { Step1DataRenderer } from './components/step1-data-renderer/step1-data-renderer';
import { Step2DataRenderer } from './components/step2-data-renderer/step2-data-renderer';
import { ConvMessageRenderer } from './components/conv-message-renderer/conv-message-renderer';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component: Step1DataRenderer
    },
    {
        path:"s/:slug",
        component: Step2DataRenderer
    }
    ,
    {
        path:"s/:slug/c/:convId",
        component: ConvMessageRenderer
    }
];
