
import { Component, OnInit, Input } from '@angular/core';
import { DbLink } from './../../../../interfaces/db-link.model';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: 'app-my-pages-db-backup-link',
  // template :`
  //   <app-server></app-server>
  //   <app-server></app-server> `,
  templateUrl: './db-backup-link.component.html',
  styleUrls: ['./db-backup-link.component.css']
})
export class MyPagesDbBackupLinkComponent implements OnInit {

  // allowNewServer = false;
  // serverCreationStatus = 'No server was created !';
  // serverName = 'Initial Server';
  // serverCreated = false;
  // servers = ['TestServer', 'TestServer2'];

  @Input() dbLink: DbLink;

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(): void {

    // this.serverCreated = true;
    // this.servers.push(this.serverName);
    // this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;

  }

  onUpdateServerName(event: Event): void{
    // this.serverName = ( event.target as HTMLInputElement).value;
  }

}
