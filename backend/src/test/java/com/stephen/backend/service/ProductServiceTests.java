package com.stephen.backend.service;

import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.stephen.backend.model.Product;
import com.stephen.backend.repository.ProductRepository;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTests {
	
	@Mock
	private ProductRepository productRepository;
	
	@InjectMocks
	private ProductService productService;
	
	@Test
	public void CreateProduct() {
		Product mockProduct = new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build();
		
		Product inputProduct = new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build();
		
		when(productRepository.save(Mockito.any(Product.class))).thenReturn(mockProduct);
		
		Product returnProduct = productService.createProduct(inputProduct);
		
		Assertions.assertThat(returnProduct).isNotNull();
		assertEquals(returnProduct, mockProduct);
	}
	
	
}
