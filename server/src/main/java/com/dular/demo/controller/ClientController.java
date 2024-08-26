package com.dular.demo.controller;
import com.dular.demo.domain.Client;

import com.dular.demo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.*;
import com.dular.demo.DTO.ClientDto;

import java.util.List;
/**
 * Created by maiquelknechtel on 10/07/24.
 */
@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;
    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping(value = "client-create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Client create(@RequestBody ClientDto clientDto){
        return clientService.create(clientDto.toBuild(clientDto));
    }
    @PostMapping(value = "client-update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody ClientDto clientDto){
        clientService.update(clientDto.toBuild(clientDto));
    }
    @RequestMapping(value = "client-findAll", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public List<Client> findAll(){
        return clientService.FindAll();
    }

    @PostMapping(value = "client-delete", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@RequestBody ClientDto clientDto){
        clientService.delete(clientDto.toBuild(clientDto));
    }
    @PostMapping(value = "client-findById", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Client findById(@RequestBody ClientDto clientDto){
        return clientService.findById(clientDto.getId());
    }
    @PostMapping(value = "client-findByAllEquipment", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Client findByAllEquipment(@RequestBody ClientDto clientDto){
        return clientService.findAllEquipment(clientDto.toBuild(clientDto));
    }
}