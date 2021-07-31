import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'demo-app',
  templateUrl: './demo-app.html',
})
export class AppComponent {
  constructor(public location: Location) {}

  getLinkStyle(path) {
    if (path === this.location.path()) {
      return true;
    } else if (path.length > 0) {
      return this.location.path().indexOf(path) > -1;
    }
  }
}
