
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WarningAlertComponent } from './components/udemy-study/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/udemy-study/success-alert/success-alert.component';
import { ServersComponent } from './components/udemy-study/servers/servers.component';
import { ServerComponent } from './components/udemy-study/servers/server/server.component';

import { MyPagesLinkComponent } from './components/my-pages-application-components/links/link/link.component';
import { MyPagesLinksComponent } from './components/my-pages-application-components/links/links.component';
import { MyPagesDbBackupLinkComponent } from './components/my-pages-application-components/db-backup-links/db-backup-link/db-backup-link.component';
import { MyPagesDbBackupLinksComponent } from './components/my-pages-application-components/db-backup-links/db-backup-links.component';
import { EvenComponent } from './components/udemy-study/even/even.component';
import { OddComponent } from './components/udemy-study/odd/odd.component';
import { GameControlComponent } from './components/udemy-study/game-control/game-control.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    MyPagesDbBackupLinksComponent,
    MyPagesDbBackupLinkComponent,
    MyPagesLinksComponent,
    MyPagesLinkComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
