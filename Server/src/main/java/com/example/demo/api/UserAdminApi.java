package com.example.demo.api;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserAdminRepository;
import com.example.demo.dto.UserAdmin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class UserAdminApi {

	
	@Autowired
	UserAdminRepository userAdminRepository;
	
	@PostMapping
	public UserAdmin getUser(@RequestBody UserAdmin user,
			HttpServletResponse response) {
		UserAdmin au = userAdminRepository.findByNicknameAndPassword(user.getNickname(),user.getPassword());
		if (au!=null) {
			Cookie cookie = new Cookie("login", au.getNickname());
			cookie.setMaxAge(60*60);
			response.addCookie(cookie);
			System.out.println("Por Aqui");
		}
		
		return au;
	}
}
