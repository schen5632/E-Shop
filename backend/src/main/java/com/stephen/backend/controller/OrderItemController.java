package com.stephen.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stephen.backend.model.OrderWhole;
import com.stephen.backend.model.OrderItem;
import com.stephen.backend.repository.OrderItemRepository;
import com.stephen.backend.repository.OrderRepository;

@RestController
public class OrderItemController {
	@Autowired 
	OrderItemRepository orderItemRepository;
	
	@Autowired 
	OrderRepository orderRepository;
	
	@GetMapping("/orderItems")
	List<OrderItem> getOrderItems() {
		return orderItemRepository.findAll();
	}
	
	@PostMapping("/orderItem")
	OrderItem createOrderItem(@RequestBody OrderItem orderItem) {
		return orderItemRepository.save(orderItem);
	}
	
    @PutMapping("orderItem/{orderItemId}/order/{orderId}")
    OrderItem assignOrderToOrderItem(
            @PathVariable Long orderId,
            @PathVariable Long orderItemId
    ) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId).get();
        OrderWhole orderWhole = orderRepository.findById(orderId).get();
        orderItem.setOrder(orderWhole);
        return orderItemRepository.save(orderItem);
    }
    
    @DeleteMapping("/orderItem/{id}")
    String deleteOrderItem(@PathVariable Long id) {
    	orderItemRepository.deleteById(id);
    	return "Order Item with id " + id + " has been deleted!";    
    }
	
}
