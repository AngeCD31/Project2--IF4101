package ucr.parkingprojectspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.Spot;
import ucr.parkingprojectspringboot.repository.SpotRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SpotService {

    @Autowired
    private SpotRepository repository;

    public List<Spot> listAll() {
        return repository.findAll();
    }

    public void save(Spot spot) {
        repository.save(spot);
    }

    public Spot get(int id) {
        return repository.findById(id).get();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}

