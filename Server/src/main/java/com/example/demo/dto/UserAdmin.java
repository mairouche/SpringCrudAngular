package com.example.demo.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="useradmin")
public class UserAdmin implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String nickname;
	private String password;
	
	
	public UserAdmin(String nickname, String password) {
		super();
		this.nickname = nickname;
		this.password = password;
	}
	
	public UserAdmin() {
		
	}
	
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
