package com.stephen.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.stephen.backend.dto.OrderResultDTO;
import com.stephen.backend.model.OrderWhole;

public interface OrderRepository extends JpaRepository<OrderWhole, Long>{
	List<OrderWhole> findByUserEmail(String userEmail);
	
	@Query(value = "SELECT new com.stephen.backend.dto.OrderResultDTO(o.id, oi.id) FROM OrderWhole o JOIN o.orderItems oi")
	List<OrderResultDTO> getOrderResultDTO();
}
