package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.Contacto;

@Repository
public interface ContactosRepository extends JpaRepository<Contacto, Long>{
		
	Contacto findByEmail(String email);
	
	
	@Query("select count(c.id) as suma, c.puestotrabajo as puestotrabajo from Contacto c group by c.puestotrabajo ")
	List<Contacto> countBySumaAnduestotrabajo();
	/*
	 * Salen con Clave valor
	@Query("select new map(count(c.id) as suma, c.puestotrabajo as puestotrabajo) from Contacto c group by c.puestotrabajo ")
	List<Contacto> countBySumaAnduestotrabajo();*/
	
	@Query("select avg(c.aniosempresa) as avg, c.puestotrabajo as puestotrabajo from Contacto c group by c.puestotrabajo ")
	List<Contacto> countByAvgAndPuestotrabajo();
	
	/*
	 * Salen con Clave valor
	@Query("select new map(avg(c.aniosempresa) as avg, c.puestotrabajo as puestotrabajo) from Contacto c group by c.puestotrabajo ")
	List<Contacto> countByAvgAndPuestotrabajo();*/
}
