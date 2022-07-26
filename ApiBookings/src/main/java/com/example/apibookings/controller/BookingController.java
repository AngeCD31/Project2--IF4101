package com.example.apibookings.controller;

//import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/booking")

public class BookingController {
    @Autowired
    private BookingService service;

    @GetMapping("/getAllBookings")
    public List<Booking> list() {
        System.out.println(service.listAll().toString());
        return service.listAll();
    }

    @GetMapping("/getBooking/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Integer id){
        try {
            Booking booking = service.get(id);
            return new ResponseEntity<Booking>(booking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Booking>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/saveClient")
    public void insertBooking(Booking booking) { service.save(booking);
    }

    @PostMapping("/updateClient")
    public ResponseEntity<Client> updateBooking(@RequestBody Client client, @PathVariable Integer id) {
        try {
            Client existingBooking = service.get(id);
            service.save(existingBooking);
            return new ResponseEntity<Client>(client, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteBooking/{id}")
    public void deleteBooking(@PathVariable int id) {
        service.delete(id);
    }
}
