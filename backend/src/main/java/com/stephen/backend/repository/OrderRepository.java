package com.stephen.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.OrderWhole;

public interface OrderRepository extends JpaRepository<OrderWhole, Long>{
	List<OrderWhole> findByEmail(String email);
}
