import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RESUME_APP_BASE_URL } from 'src/app/shared/constants';
import { User } from 'src/app/shared/user-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number=0;
  user:User=new User(0,'','');
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {      
        this.id = +params.get('id')!;
        this.http.get<User>(RESUME_APP_BASE_URL + 'service-controller/users/'+this.id).subscribe(response => {
          this.user = response;
          console.log(this.user);
        });           
    })
  }

}
