package com.stephen.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.stephen.backend.model.OrderJoinId;
import com.stephen.backend.model.OrderWhole;

public interface OrderRepository extends JpaRepository<OrderWhole, Long>{
	List<OrderWhole> findByUserEmail(String userEmail);
	
	@Query("SELECT new com.stephen.backend.model.OrderJoinId(ow.id, oi.id) FROM OrderWhole ow JOIN ow.orderItems oi")
	List<OrderJoinId> getJoinInfo();
}
