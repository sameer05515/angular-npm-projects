import { Output } from "@angular/core";



export class LoggingService {
  

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
  
}
