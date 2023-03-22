package com.stephen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
