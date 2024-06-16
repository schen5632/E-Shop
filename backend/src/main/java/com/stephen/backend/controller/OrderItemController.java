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
import com.stephen.backend.service.OrderItemService;

@RestController
public class OrderItemController {
	@Autowired 
	private OrderItemService orderItemService;
	
	@GetMapping("/orderItems")
	List<OrderItem> getOrderItems() {
		return orderItemService.getOrderItems();
	}
	
	@PostMapping("/orderItem")
	OrderItem createOrderItem(@RequestBody OrderItem orderItem) {
		return orderItemService.createOrderItem(orderItem);
	}
	
    @PutMapping("orderItem/{orderItemId}/order/{orderId}")
    OrderItem assignOrderToOrderItem(
            @PathVariable Long orderId,
            @PathVariable Long orderItemId
    ) {
    	return orderItemService.assignOrderToOrderItem(orderId, orderItemId);
    }
    
    @DeleteMapping("/orderItem/{id}")
    String deleteOrderItem(@PathVariable Long id) {
    	return orderItemService.deleteOrderItem(id);
    }
	
}
