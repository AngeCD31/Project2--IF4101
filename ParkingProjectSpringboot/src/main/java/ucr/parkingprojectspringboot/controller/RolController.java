package ucr.parkingprojectspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ucr.parkingprojectspringboot.domain.Rol;
import ucr.parkingprojectspringboot.service.RolService;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/rol")
public class RolController {

    @Autowired
    private RolService service;

    @GetMapping("/roles")
    public List<Rol> list() {
        return service.listAll();
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity<Rol> get(@PathVariable Integer id) {
        try {
            Rol rol = service.get(id);
            return new ResponseEntity<Rol>(rol, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Rol>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public void add(@RequestBody Rol rol) {
        service.save(rol);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Rol> update(@RequestBody Rol rol, @PathVariable Integer id) {
        try {
            service.save(rol);
            return new ResponseEntity<Rol>(rol, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Rol>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}

