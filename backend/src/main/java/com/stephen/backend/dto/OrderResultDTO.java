package com.stephen.backend.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

class OrderDTO {
	private Long orderId;
	
	private Long orderItemId;
	
	public OrderDTO(Long orderId, Long orderItemId) {
		this.orderId = orderId;
		this.orderItemId = orderItemId;
	}
}


@Entity
@IdClass(OrderDTO.class)
public class OrderResultDTO {
	@Id
	private Long orderId;
	
	@Id
	private Long orderItemId;
	
	public OrderResultDTO(Long orderId, Long orderItemId) {
		this.orderId = orderId;
		this.orderItemId = orderItemId;
	}
	
}
