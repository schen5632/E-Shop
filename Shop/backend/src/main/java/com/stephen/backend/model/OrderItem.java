package com.stephen.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
public class OrderItem {

	@Id
	@GeneratedValue
	private Long id;
	
	private Long productId;
	
	private int quantity;
	
	/*
	@ManyToOne
	@JsonBackReference
	private OrderWhole orderWhole;
	

	public OrderWhole getOrder() {
		return orderWhole;
	}

	public void setOrder(OrderWhole orderWhole) {
		this.orderWhole = orderWhole;
	}
	*/

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
