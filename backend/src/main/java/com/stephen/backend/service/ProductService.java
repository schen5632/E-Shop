package com.stephen.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stephen.backend.model.Product;
import com.stephen.backend.repository.ProductRepository;	

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}
	

    public List<Product> saveProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }
    
    public Product getProductByName(String name) {
    	return productRepository.findByName(name);
    }
    
    public List<Product> getProductsByCategory(String category) {
    	return productRepository.findByCategory(category);
    }
    
    public Product updateProductById(Product newProduct, Long id) {
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

    public String deleteProductById(Long id) {
        productRepository.deleteById(id);
        return "Product with id " + id + " has been deleted!"; 
    }
}
