package com.javatpoint.LoginLogoutExample.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javatpoint.LoginLogoutExample.entity.AdminDetail;
import com.javatpoint.LoginLogoutExample.service.interfaces.AdminService;
import com.javatpoint.LoginLogoutExample.service.interfaces.TokenService;
import com.javavtpoint.LoginLogoutExample.Token.GenerateToken;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private TokenService tokenService;
	
	GenerateToken generateToken = new GenerateToken();
	
	@PostMapping("/saveAdmin")
	public int saveAdminDetail(@RequestBody AdminDetail adminDetail) {
		return adminService.saveAdminDetail(adminDetail);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Integer> login(@RequestBody AdminDetail adminDetail)
	{
		int status;
		HttpHeaders httpHeader = null;
	
		// Authenticate User.
		status = adminService.adminLogin(adminDetail.getEmailId(), adminDetail.getPassword());
		
		/*
		 * If User is authenticated then Do Authorization Task.
		 */
		if (status > 0) 
		{
			/*
			 * Generate token.
			 */
			String tokenData[] = generateToken.createJWT(adminDetail.getEmailId(), "JavaTpoint", "JWT Token",
					adminDetail.getRole(), 43200000);
			
			// get Token.
			String token = tokenData[0];
			
			System.out.println("Authorization :: " + token);

			// Create the Header Object
			httpHeader = new HttpHeaders();

			// Add token to the Header.
			httpHeader.add("Authorization", token);

			// Check if token is already exist.
			long isUserEmailExists = tokenService.getTokenDetail(adminDetail.getEmailId());
			
			/*
			 * If token exist then update Token else create and insert the token.
			 */
			if (isUserEmailExists > 0) 
			{
				tokenService.updateToken(adminDetail.getEmailId(), token, tokenData[1]);
			} 
			else 
			{
				tokenService.saveUserEmail(adminDetail.getEmailId(), status);
				tokenService.updateToken(adminDetail.getEmailId(), token, tokenData[1]);
			}

			return new ResponseEntity<Integer>(status, httpHeader, HttpStatus.OK);
		} 
		
		// if not authenticated return  status what we get.
		else 
		{
			return new ResponseEntity<Integer>(status, httpHeader, HttpStatus.OK);
		}
		

	}
	
	
	@GetMapping("/getAdminData/{adminId}")
	public List<AdminDetail> getAdminData(@PathVariable int adminId, @RequestHeader("Authorization") String authorizationToken)
	{
		String token[] = authorizationToken.split(" ");
		int result = tokenService.tokenAuthentication(token[1], adminId);
		
		if (result > 0) {
			return adminService.getAdminData();
		} else {
			return null;
		}
	}
	
}
