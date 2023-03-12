package com.stephen.backend.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Order {
	
	@Id
	@GeneratedValue
	private int id;
	
	private BigDecimal totalPrice;
	
	@CreationTimestamp
	private Date dateUpdated;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
	private Set<OrderItem> orderItems = new HashSet<>();
}
