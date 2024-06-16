 package com.stephen.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stephen.backend.model.OrderWhole;
import com.stephen.backend.repository.OrderRepository;
import com.stephen.backend.service.OrderService;

@RestController
public class OrderController {
	@Autowired 
	OrderService orderService;
	
	@GetMapping("/orders")
	List<OrderWhole> getOrders() {
		return orderService.getOrders();
	}
	
	@PostMapping("/order")
	OrderWhole createOrder(@RequestBody OrderWhole orderWhole) {
		return orderService.createOrder(orderWhole);
	}
	
    @DeleteMapping("/order/{id}")
    String deleteOrderById(@PathVariable Long id) {
    	return orderService.deleteOrderById(id);
    }
	
}
