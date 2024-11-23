package com.defectus.clientservice.dao.repositories;

import com.defectus.clientservice.dao.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
