package ucr.parkingprojectspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ucr.parkingprojectspringboot.domain.Spot;
import ucr.parkingprojectspringboot.service.SpotService;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/spot")
public class SpotController {

    @Autowired
    private SpotService service;

    @GetMapping("/spots")
    public List<Spot> list() {
        return service.listAll();
    }

    @GetMapping("/spots/{id}")
    public ResponseEntity<Spot> get(@PathVariable Integer id) {
        try {
            Spot spot = service.get(id);
            return new ResponseEntity<Spot>(spot, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Spot>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/spots/getByParking/{id}")
    public List<Spot> getByParking(@PathVariable Integer id) {
            List<Spot> allSpots = service.listAll();
            ArrayList<Spot> result = new ArrayList<Spot>();
        for (int i = 0; i < allSpots.size(); i++) {
            if (allSpots.get(i).getParkingId() == id) {
                result.add(allSpots.get(i));
            }
        }
        return result;
    }

    @PostMapping("/add")
    public void add(@RequestBody Spot spot) {
        service.save(spot);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Spot> update(@RequestBody Spot spot, @PathVariable Integer id) {
        try {
            service.save(spot);
            return new ResponseEntity<Spot>(spot, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Spot>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}

