import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { CollectionPage } from './pages/collection';
import { BookFindPage } from './pages/book-find';
import { BookViewPage } from './pages/book-view';
import { NotFoundPage } from './pages/not-found';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  },
  {
    path: 'book/find',
    component: BookFindPage
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: BookViewPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
