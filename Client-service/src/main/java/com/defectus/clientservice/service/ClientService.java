package com.defectus.clientservice.service;

import com.defectus.clientservice.dao.entities.Client;
import com.defectus.clientservice.dao.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.DocFlavor;
import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }
    public Client getClientById(Integer id) {
        return clientRepository.findById(id).orElse(null);
    }
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }
    public Client updateClient(Integer id ,Client client ) {
       if(client != null){
        Client client1 = getClientById(id);
        client1.setName(client.getName());
        client1.setEmail(client.getEmail());
        client1.setPhone(client.getPhone());
        client1.setPassword(client.getPassword());
        return clientRepository.save(client1);
    }
    return null;}

    public void deleteClient(Integer id) {
        clientRepository.deleteById(id);
    }
}
