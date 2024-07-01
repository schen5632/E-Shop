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
import com.stephen.backend.service.ProductService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://eshop-sc.s3-website.ca-central-1.amazonaws.com/"})
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/product")
	Product createProduct(@RequestBody Product newProduct) {
		return productService.createProduct(newProduct);
	}
	
	@GetMapping("/products")
	List<Product> getAllProducts() {
		return productService.getProducts();
	}
	
	@GetMapping("/product/{id}")
	Product getProductById(@PathVariable Long id) {
		return productService.getProductById(id);
	}
	
	
	@GetMapping("/products/category/{category}")
	List<Product> getProductsByCategory(@PathVariable String category) {
		return productService.getProductsByCategory(category);
	}
	
    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productService.updateProductById(newProduct, id);
    }	
    
    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id) {
    	return productService.deleteProductById(id);
    }
}
