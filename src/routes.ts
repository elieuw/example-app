import { RouterConfig } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { load } from './services/async-component-resolver';

export const routes: RouterConfig = [
  {
    path: '',
    component: load(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/collection').CollectionPage);
      });
    }))
  },
  {
    path: 'book/find',
    component: load(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/book-find').BookFindPage);
      });
    }))
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: load(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/book-view').BookViewPage);
      });
    }))
  },
  {
    path: '**',
    component: load(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/not-found').NotFoundPage);
      });
    }))
  }
];