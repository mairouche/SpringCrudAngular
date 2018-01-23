package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.UserAdmin;

@Repository
public interface UserAdminRepository extends JpaRepository<UserAdmin, String>{
	
	UserAdmin findByNicknameAndPassword(String nickname,String Password);

}
