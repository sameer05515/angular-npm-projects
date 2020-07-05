import { DbLink } from './interfaces/db-link.model';
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
  dbLinkData: DbLink[] = [];

  constructor(private http: HttpClient) {
    this.GetLinkData(http);
    this.GetDbLinkData(http);


  }

  private GetDbLinkData(http: HttpClient): void{
    console.log('[AppComponent] : Going to get db link data')
    http.get<DbLink>('data/json/dbBakupLinkData.json')
      .pipe(map(responseData => {
        const dblinkArr: Link[] = [];
        this.processDbLinkResponse(responseData, dblinkArr);
        return dblinkArr;
      }))
      .subscribe(links => {
        // this.linkData = responseData;
        console.log('=======>>>>' + links);
        this.dbLinkData = links;
      });
  }

  private GetLinkData(http: HttpClient): void{
    console.log('[AppComponent] : Going to get link data')
    http.get<Link>('data/json/linkData.json')
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

  private processDbLinkResponse(responseData: DbLink, dblinkArr: DbLink[]): void {
    for (const link in responseData) {
      console.log('link' + responseData[link]);
      dblinkArr.push({ ...responseData[link] });
    }
  }
}
