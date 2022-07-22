package ucr.parkingprojectspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.User;
import ucr.parkingprojectspringboot.domain.Vehicle;
import ucr.parkingprojectspringboot.repository.UserRepository;
import ucr.parkingprojectspringboot.repository.VehicleRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleService {

    @Autowired
    private VehicleRepository repository;

    public List<Vehicle> listAll() {
        return repository.findAll();
    }

    public void save(Vehicle vehicle) {
        repository.save(vehicle);
    }

    public Vehicle get(int id) {
        return repository.findById(id).get();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}
