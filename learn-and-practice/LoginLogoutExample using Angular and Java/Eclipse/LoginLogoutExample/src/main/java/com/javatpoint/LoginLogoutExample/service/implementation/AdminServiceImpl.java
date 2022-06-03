package com.javatpoint.LoginLogoutExample.service.implementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatpoint.LoginLogoutExample.DAO.interfaces.AdminDAO;
import com.javatpoint.LoginLogoutExample.entity.AdminDetail;
import com.javatpoint.LoginLogoutExample.service.interfaces.AdminService;

@Service("adminService")
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDAO adminDAO;

	@Transactional
	public int saveAdminDetail(AdminDetail adminDetail) {
		return adminDAO.saveAdminDetail(adminDetail);
	}
	
	@Transactional
	public int adminLogin(String emailId, String password) {
		return adminDAO.adminLogin(emailId, password);
	}

	@Transactional
	public List<AdminDetail> getAdminData() {
		return adminDAO.getAdminData();
	}
	
	

}
