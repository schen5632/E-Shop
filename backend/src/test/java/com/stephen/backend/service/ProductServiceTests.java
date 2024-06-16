package com.stephen.backend.service;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.stephen.backend.model.Product;
import com.stephen.backend.repository.ProductRepository;

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
	
	@Test
	public void getAllProducts() {
		
		List<Product> mockProducts = new ArrayList<>();
		mockProducts.add(new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build());
		mockProducts.add(new Product.Builder("productName2", BigDecimal.valueOf(100), "productCategory2").build());
		
		when(productRepository.findAll()).thenReturn(mockProducts);
		
		List<Product> returnProducts = productService.getProducts(); 
		
		assertEquals(returnProducts.size(), 2);
	}
	
	@Test
	public void GetProductById() {
		Product mockProduct = new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build();
		
		doNothing().when(productRepository).deleteById(mockProduct.getId());
		
		String expected = "Product with id " + mockProduct.getId() + " has been deleted!"; 
		
		String result = productService.deleteProductById(mockProduct.getId());
		
		assertEquals(result, expected);
	}
	
	@Test
	public void updateProductById() {
		
		Product oldProduct = new Product.Builder("productName1", BigDecimal.valueOf(100), "productCategory1").build();
		Product mockProduct = new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build();
		
		when(productRepository.findById(oldProduct.getId())).thenReturn(Optional.ofNullable(oldProduct));
		when(productRepository.save(Mockito.any(Product.class))).thenReturn(mockProduct);
		
		Product returnProduct = productService.updateProductById(mockProduct, oldProduct.getId()); 
		
		Assertions.assertThat(returnProduct).isNotNull();
		assertEquals(returnProduct, mockProduct);
	}
	
	@Test
	public void deleteProductById() {
		Product mockProduct = new Product.Builder("productName", BigDecimal.valueOf(100), "productCategory").build();
		
		when(productRepository.findById(mockProduct.getId())).thenReturn(Optional.ofNullable(mockProduct));
		Product returnProduct = productService.getProductById(mockProduct.getId()); 
		
		assertAll(() -> productService.deleteProductById(mockProduct.getId()));
		
	}
	
	
	
	
	
}
