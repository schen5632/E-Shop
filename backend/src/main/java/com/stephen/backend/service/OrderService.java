package com.stephen.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.stephen.backend.model.OrderWhole;
import com.stephen.backend.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired 
	OrderRepository orderRepository;

	public List<OrderWhole> getOrders() {
		return orderRepository.findAll();
	}
	
	public OrderWhole createOrder(OrderWhole orderWhole) {
		return orderRepository.save(orderWhole);
	}
	
    public String deleteOrderById(Long id) {
    	orderRepository.deleteById(id);
    	return "Order with id " + id + " has been deleted!";    
    }

}
