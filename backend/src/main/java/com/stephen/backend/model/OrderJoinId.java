package com.stephen.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Entity;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class OrderJoinId {
	
	private Long orderId;
	
	private Long orderItemId;
	
	public OrderJoinId(Long orderId, Long orderItemId) {
		this.orderId = orderId;
		this.orderItemId = orderItemId;
	}
}
