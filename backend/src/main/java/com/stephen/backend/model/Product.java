package com.stephen.backend.model;

import java.math.BigDecimal;

import org.springframework.http.ContentDisposition.Builder;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String priceId;

	private String name;
	
	private BigDecimal price;

	private String imageUrl;
	
	private String category;
	
	public Product() {
		
	}
	
	private Product(Builder builder) {
		this.priceId = builder.priceId;
		this.name = builder.name;
		this.price = builder.price;
		this.category = builder.category;
		this.imageUrl = builder.imageUrl;
	}
	
	public static class Builder {
		private String priceId;

		private String name;
		
		private BigDecimal price;

		private String imageUrl;
		
		private String category;
		
		public Builder(String name, BigDecimal price, String category) {
			this.name = name;
			this.price = price;
			this.category = category;		
		}
		
		public Builder withImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
			return this;
		}
		
		public Builder withPriceId(String priceId) {
			this.priceId = priceId;
			return this;
		}
		
		public Product build() {
			return new Product(this);
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getPriceId() {
		return priceId;
	}

	public void setPriceId(String priceId) {
		this.priceId = priceId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	
	
}
