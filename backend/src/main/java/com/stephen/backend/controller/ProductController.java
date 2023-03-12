package com.stephen.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stephen.backend.model.Product;
import com.stephen.backend.repository.ProductRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@PostMapping("/product")
	Product createProduct(@RequestBody Product newProduct) {
		System.out.println(newProduct);
		return productRepository.save(newProduct);
	}
	
	@GetMapping("/products")
	List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping("/product/{id}")
	Product getProductById(@PathVariable Long id) {
		return productRepository.findById(id).get();
	}
	
    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setPriceId(newProduct.getPriceId());
                    product.setPrice(newProduct.getPrice());
                    product.setImageUrl(newProduct.getImageUrl());
                    product.setCategory(newProduct.getCategory());
                    return productRepository.save(product);
                }).get();
    }	
    
    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id) {
    	productRepository.deleteById(id);
    	return "Product with id " + id + " has been deleted!";    }
}
