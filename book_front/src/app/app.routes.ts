import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { ContributorListComponent } from './components/contributor-list/contributor-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookAddFormComponent } from './components/book-add-form/book-add-form.component';
import { ContributorAddFormComponent } from './components/contributor-add-form/contributor-add-form.component';
import { ContributorEditComponent } from './components/contributor-edit/contributor-edit.component';

export const routes: Routes = [
    {
        path: 'local/books/view',
        component: BookListComponent,
    },
    {
        path:'local/books/edit',
        component:BookEditComponent,
    },
    {
        path: 'local/books/add',
        component:BookAddFormComponent,
    },
    {
        path:'local/contributors/view',
        component:ContributorListComponent,
    },
    {
        path:'local/contributors/add',
        component:ContributorAddFormComponent,
    },
    {
        path:'local/contributors/edit',
        component:ContributorEditComponent,
    },
    {
        path: '**',
        component: BookListComponent,
    }

];
