package ucr.parkingprojectspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.Rate;
import ucr.parkingprojectspringboot.repository.RateRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RateService {

    @Autowired
    private RateRepository repository;

    public List<Rate> listAll() {
        return repository.findAll();
    }

    public void save(Rate rate) {
        repository.save(rate);
    }

    public Rate get(int id) {
        return repository.findById(id).get();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }



}
