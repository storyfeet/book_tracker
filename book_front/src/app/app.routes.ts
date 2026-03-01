import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent,
    },
    {
        path:'local/books/edit',
        component:HomePageComponent,
    },
    {
        path:'local/authors/view',
        component:HomePageComponent,
    }

];
