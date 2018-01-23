package com.example.demo.api;

import java.util.List;

import javax.validation.Valid;

import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ContactosRepository;
import com.example.demo.dto.Contacto;
import com.example.demo.service.ContactosServicce;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contacto")
public class ContactosApi {
	
	
	@Autowired
	ContactosRepository contactoRepositoyry;
	
	//Sacar Todos
	@GetMapping
	public List<Contacto> getContactos(){
		return contactoRepositoyry.findAll();
	}
	
	//Guardar Uno
	@PostMapping
	public Contacto saveContacto(@Valid @RequestBody Contacto contacto) {
		return contactoRepositoyry.save(contacto);
	}
	
	
	//Sacar uno por ID
	@GetMapping(path="/{id}")
	public ResponseEntity<Contacto> getContacto(@PathVariable(value = "id") Long id){
		Contacto contacto= contactoRepositoyry.findOne(id);
		
		if(contacto==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(contacto);
	}
	
	//Sacar uno por email
	@RequestMapping(value="/email", method=RequestMethod.POST)
	public ResponseEntity<Contacto> getContacto(@RequestBody Contacto cont){
		Contacto contacto= contactoRepositoyry.findByEmail(cont.getEmail());
		return ResponseEntity.ok().body(contacto);
	}
	
	//Update
	@PutMapping(path="/{id}")
	
	public ResponseEntity<Contacto> updateContacto(@PathVariable(value ="id") Long id,
												   @Valid @RequestBody Contacto contactoDetalle){
		Contacto contacto = contactoRepositoyry.findOne(id);
		
		if(contacto==null) {
			return ResponseEntity.notFound().build();
		}
		
		contacto.setNombre(contactoDetalle.getNombre());
		contacto.setApellido(contactoDetalle.getApellido());
		contacto.setTelefono(contactoDetalle.getTelefono());
		contacto.setEmail(contactoDetalle.getEmail());
		contacto.setPuestotrabajo(contactoDetalle.getPuestotrabajo());
		contacto.setAniosempresa(contactoDetalle.getAniosempresa());
		
		Contacto contactoUpdate = contactoRepositoyry.save(contacto);
		
		return ResponseEntity.ok(contactoUpdate);
	}
	
	//Delete 
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Contacto> deleteContacto(@PathVariable (value = "id") Long id){
		Contacto contacto = contactoRepositoyry.findOne(id);
		
		if(contacto == null) {
			return ResponseEntity.notFound().build();
		}
		
		contactoRepositoyry.delete(contacto);
		
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(path="/estadisticas/numeroPuestos")
	public List<Contacto> getCount(){
		
		return contactoRepositoyry.countBySumaAnduestotrabajo();
	}
	
	@GetMapping(path="/estadisticas/edadMediaPuestos")
	public List<Contacto> getedadMedia(){
		
		return contactoRepositoyry.countByAvgAndPuestotrabajo();
	}
	
}
