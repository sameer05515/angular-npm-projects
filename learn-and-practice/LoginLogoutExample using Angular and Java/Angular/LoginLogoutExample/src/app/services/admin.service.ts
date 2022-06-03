import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { AdminDetail } from '../classes/admin-detail';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Base URL
  private  baseUrl = "http://localhost:8090/LoginLogoutExample/api/";

  

  constructor(private http: Http, private router : Router) { }

  saveAdminDetails(adminDetail : AdminDetail) : Observable<any>
  {
      let url = this.baseUrl + "saveAdmin";
      return this.http.post(url,adminDetail);
  }


  login(adminDetail : AdminDetail) : Observable<any>
  {
      let url = this.baseUrl + "login";
      return this.http.post(url, adminDetail);
  }

  logout() 
  { 
    // Remove the token from the localStorage.
    localStorage.removeItem('token');

    this.router.navigate(['']);


  }


  /*
	* Check whether User is loggedIn or not.
	*/

	isLoggedIn() { 

		// create an instance of JwtHelper class.
    let jwtHelper = new JwtHelperService();

		// get the token from the localStorage as we have to work on this token.
		let token = localStorage.getItem('token');

		// check whether if token have something or it is null.
		if(!token)
		{
			return false;
		}

		// get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accept a string value which is nothing but token.

		if(token)
		{
			let expirationDate = jwtHelper.getTokenExpirationDate(token);

			// check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.

			let isExpired = jwtHelper.isTokenExpired(token);

			return !isExpired;    
		}   
  }
  
  
  getAdminDetail(adminId) : Observable<any>
  {
      let url = this.baseUrl + "getAdminData/" + adminId;

       // create an instance of Header object.
      let headers = new Headers();

      // get token from localStorage.
      let token = localStorage.getItem('token');

      // Append Authorization header.
      headers.append('Authorization' , 'Bearer ' + token);

      // create object of RequestOptions and include that in it.
      let options = new RequestOptions( { headers : headers } );

      return this.http.get(url , options);
  }
  
}
