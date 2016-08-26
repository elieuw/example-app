import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { provideDB } from '@ngrx/db';

import { AppComponent } from './app.component';
import { BookActions } from './actions/book';
import { BookDetailComponent } from './components/book-detail';
import { BookPreviewComponent } from './components/book-preview';
import { BookPreviewListComponent } from './components/book-preview-list';
import { BookSearchComponent } from './components/book-search';
import { BookEffects } from './effects/book';
import { BookExistsGuard } from './guards/book-exists';
import { AddCommasPipe } from './pipes/add-commas';
import { EllipsisPipe } from './pipes/ellipsis';
import { GoogleBooksService } from './services/google-books';
import { routes } from './routes';
import { rootReducer } from './reducers';
import { schema } from './db-schema';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,

    /**
     * We must import all of the modules for the material components used
     * throughout the application
     */
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,

    /**
     * provideRouter sets up all of the providers for @angular/router. It accepts
     * an array of routes and a location strategy. By default, it will use
     * `PathLocationStrategy`.
     */
    RouterModule.forRoot(routes, {
      useHash: true
    }),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     *
     * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
     */
    StoreModule.provideStore(rootReducer),

    /**
     * instrumentStore() sets up the @ngrx/store-devtools providers
     */
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        position: 'right',
        visible: true
      })
    }),
    StoreLogMonitorModule,

    /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(BookEffects)
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    AddCommasPipe,
    EllipsisPipe
  ],
  providers: [
    /**
     * provideDB sets up @ngrx/db with the provided schema and makes the Database
     * service everywhere.
     */
    provideDB(schema),
    BookActions,
    BookExistsGuard,
    GoogleBooksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }