package com.stephen.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.stephen.backend.model.OrderItem;
import com.stephen.backend.model.OrderWhole;
import com.stephen.backend.repository.OrderItemRepository;
import com.stephen.backend.repository.OrderRepository;

@Service
public class OrderItemService {
	@Autowired 
	OrderItemRepository orderItemRepository;
	
	@Autowired 
	OrderRepository orderRepository;
	
	public List<OrderItem> getOrderItems() {
		return orderItemRepository.findAll();
	}
	
	public OrderItem createOrderItem(OrderItem orderItem) {
		return orderItemRepository.save(orderItem);
	}
	
   public OrderItem assignOrderToOrderItem(
    		Long orderId,
            Long orderItemId
    ) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId).get();
        OrderWhole orderWhole = orderRepository.findById(orderId).get();
//        orderItem.setOrder(orderWhole);
        return orderItemRepository.save(orderItem);
    }
    
    public String deleteOrderItem(Long id) {
    	orderItemRepository.deleteById(id);
    	return "Order Item with id " + id + " has been deleted!";    
    }
}
