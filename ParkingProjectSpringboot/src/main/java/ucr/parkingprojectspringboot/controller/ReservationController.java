package ucr.parkingprojectspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ucr.parkingprojectspringboot.domain.Reservation;
import ucr.parkingprojectspringboot.domain.Vehicle;
import ucr.parkingprojectspringboot.service.ReservationService;
import ucr.parkingprojectspringboot.service.VehicleService;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/reservation")
public class ReservationController {
    @Autowired
    private ReservationService service;

    @GetMapping("/reservations")
    public List<Reservation> list() {
        return service.listAll();
    }

    @GetMapping("/reservations/{id}")
    public ResponseEntity<Reservation> get(@PathVariable Integer id) {
        try {
            Reservation reservation = service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public void add(@RequestBody Reservation reservation) {
        service.save(reservation);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Reservation> update(@RequestBody Reservation reservation, @PathVariable Integer id) {
        try {
            service.save(reservation);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}
