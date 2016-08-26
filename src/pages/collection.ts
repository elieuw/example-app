import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBookCollection } from '../reducers';
import { BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'collection-page',
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>

    <book-preview-list [books]="books$ | async"></book-preview-list>
  `,
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPage {
  books$: Observable<BooksInput>;

  constructor(store: Store<AppState>) {
    this.books$ = store.let(getBookCollection());
  }
}
