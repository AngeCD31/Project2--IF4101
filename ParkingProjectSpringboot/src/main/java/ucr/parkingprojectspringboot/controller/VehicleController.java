package ucr.parkingprojectspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ucr.parkingprojectspringboot.domain.Vehicle;
import ucr.parkingprojectspringboot.service.VehicleService;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/vehicle")

public class VehicleController {

    @Autowired
    private VehicleService service;

    @GetMapping("/vehicles")
    public List<Vehicle> list() {
        return service.listAll();
    }

    @GetMapping("/vehicles/{id}")
    public ResponseEntity<Vehicle> get(@PathVariable Integer id) {
        try {
            Vehicle vehicle = service.get(id);
            return new ResponseEntity<Vehicle>(vehicle, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vehicle>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public void add(@RequestBody Vehicle vehicle) {
        service.save(vehicle);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Vehicle> update(@RequestBody Vehicle vehicle, @PathVariable Integer id) {
        try {
            service.save(vehicle);
            return new ResponseEntity<Vehicle>(vehicle, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vehicle>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}

