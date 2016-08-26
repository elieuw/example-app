import { Component } from '@angular/core';


@Component({
  selector: 'app',
  styles: [`
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .secondary {
      color: rgba(0, 0, 0, .54);
    }

    md-sidenav-layout {
      background: rgba(0, 0, 0, .03);
      right: 30% !important; // Make space for the devtools, demo only
    }

    md-sidenav {
      width: 300px;
    }
  `],
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list>
          <a md-list-item routerLink="/" (click)="sidenav.close()">
            <md-icon md-list-icon>book</md-icon>
            <span md-line>My Collection</span>
            <span md-line class="secondary">View your book collection!</span>
          </a>
          <a md-list-item routerLink="/book/find" (click)="sidenav.close()">
            <md-icon md-list-icon>search</md-icon>
            <span md-line>Browse Books</span>
            <span md-line class="secondary">Find your next book!</span>
          </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar color="primary">
        <button md-icon-button (click)="sidenav.open()">
          <md-icon>menu</md-icon>
        </button>
        <span>Books Sample App</span>
      </md-toolbar>

      <router-outlet></router-outlet>

    </md-sidenav-layout>
    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent { }
