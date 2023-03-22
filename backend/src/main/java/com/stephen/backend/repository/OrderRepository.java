package com.stephen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.OrderWhole;

public interface OrderRepository extends JpaRepository<OrderWhole, Long>{

}
