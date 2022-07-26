package com.example.apibookings.service;

import com.example.apibookings.domain.Client;
import com.example.apibookings.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class BookingService {

    @Autowired
    private BookingRepository repository;

    public List<Booking> listAll() {
        return repository.listAll();
    }

    public void save(Client student) {
        repository.save(student);
    }

    public Client get(int id) {
        return repository.findById(id).get();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}