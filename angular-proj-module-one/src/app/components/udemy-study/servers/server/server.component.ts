import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {

  private serverId: number = 10;
  private serverStatus: string = 'offline';

  constructor(){
    //this.serverStatus = Math.random() > 0.1 ? 'online' : 'offline';

    setInterval(() => {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 1000);
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getServerId(){
    return this.serverId;
  }
}
