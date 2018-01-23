package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ContactosRepository;
import com.example.demo.dto.Contacto;

@Service
public class ContactosServicce {
	
	@Autowired
	ContactosRepository dao;
	
	public Contacto save(Contacto contacto) {
		return dao.saveAndFlush(contacto);
	}

}
