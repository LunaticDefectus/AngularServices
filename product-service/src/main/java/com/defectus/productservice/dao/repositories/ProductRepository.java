package com.defectus.productservice.dao.repositories;


import com.defectus.productservice.dao.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
