package com.defectus.productservice.service;

import com.defectus.productservice.dao.entities.Product;
import com.defectus.productservice.dao.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.PrimitiveIterator;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product addProduct(Product product) {
       return productRepository.save(product);
    }

    public Product updateProduct(Integer id, Product product) {
        if(product != null){
        Product product1 =getProductById(id);
        product1.setName(product.getName());
        product1.setPrice(product.getPrice());
        product1.setDescription(product.getDescription());
    return productRepository.save(product1);
        }
        return null;
    }
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
