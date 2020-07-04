import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: 'app-my-pages-links',
  // template :`
  //   <app-server></app-server>
  //   <app-server></app-server> `,
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class MyPagesLinksComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'Initial Server';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(): void {

    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;

  }

  onUpdateServerName(event: Event): void{
    this.serverName = (  event.target as HTMLInputElement).value;
  }

}
