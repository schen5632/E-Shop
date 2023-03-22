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

@RestController
public class OrderController {
	@Autowired 
	OrderRepository orderRepository;
	
	@GetMapping("/orders")
	List<OrderWhole> getOrders() {
		return orderRepository.findAll();
	}
	
	@PostMapping("/order")
	OrderWhole createOrder(@RequestBody OrderWhole orderWhole) {
		return orderRepository.save(orderWhole);
	}
	
    @DeleteMapping("/order/{id}")
    String deleteOrder(@PathVariable Long id) {
    	orderRepository.deleteById(id);
    	return "Order with id " + id + " has been deleted!";    
    }
	
}
