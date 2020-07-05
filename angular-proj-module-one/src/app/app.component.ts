import { Link } from './interfaces/link.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`
  //   h3{
  //     color : red;
  //   }
  // `]
})
export class AppComponent {
  // title = 'Premendra Kumar learning angular-proj-module-one';
  // name = "Premendra Kumar";
  userName = '';
  linkData: Link[] = [];

  constructor(private http: HttpClient) {

    http.get<Link>('assets/data/json/linkData.json')
      .pipe(map(responseData => {
        const linkArr: Link[] = [];
        this.processLinkResponse(responseData, linkArr);
        return linkArr;
      }))
      .subscribe(links => {
        // this.linkData = responseData;
        console.log('=======>>>>' + links);
        this.linkData = links;
      });

  }

  private processLinkResponse(responseData: Link, linkArr: Link[]): void {
    for (const link in responseData) {
      console.log('link' + responseData[link]);
      linkArr.push({ ...responseData[link] });
    }
  }
}
