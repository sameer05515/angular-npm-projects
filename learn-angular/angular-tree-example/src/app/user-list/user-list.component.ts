import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user-model';
import { RESUME_APP_BASE_URL } from '../shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.http.get<User[]>(RESUME_APP_BASE_URL + 'service-controller/users').subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

  addUser(){

  }

  editUser(user:User){

  }

  showDetails(user:User){
    this.router.navigate(['/user-details',user.id]);
  }

  deleteUser(user:User){
    
  }

}
