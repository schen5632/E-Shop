package com.stephen.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	Product findByName(String name);
	
	List<Product> findByCategory(String category);
}
