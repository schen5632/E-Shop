package com.stephen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
