package com.stephen.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.OrderItem;
import com.stephen.backend.model.OrderWhole;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{
	List<OrderItem> findByProductId(Long ProductId);
}
