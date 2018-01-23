package com.example.demo.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contacto")
public class Contacto implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4894729030347835498L;
	@Id
	@GeneratedValue
	private Long id;
	private String nombre;
	private String apellido;
	private String telefono;
	private String email;
	private String puestotrabajo;
	private String aniosempresa;
	
	
	@Override
	public String toString() {
		return "Contacto [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", telefono=" + telefono
				+ ", email=" + email + "]";
	}
	
	public Contacto(Long  id, String nombre, String apellido, String telefono, String email,
			String puestotrabajo, String aniosempresa) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
		this.puestotrabajo = puestotrabajo;
		this.aniosempresa = aniosempresa;
	}
	
	public Contacto() {
		
	}
	
	
	public Long  getId() {
		return id;
	}
	public void setId(Long  id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPuestotrabajo() {
		return puestotrabajo;
	}

	public void setPuestotrabajo(String puestotrabajo) {
		this.puestotrabajo = puestotrabajo;
	}

	public String getAniosempresa() {
		return aniosempresa;
	}

	public void setAniosempresa(String aniosempresa) {
		this.aniosempresa = aniosempresa;
	}

	

	
	

}
