package ucr.parkingprojectspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.Rate;
import ucr.parkingprojectspringboot.domain.Reservation;
import ucr.parkingprojectspringboot.repository.RateRepository;
import ucr.parkingprojectspringboot.repository.ReservationRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ReservationService {

    @Autowired
    private ReservationRepository repository;

    public List<Reservation> listAll() {return repository.findAll();}

    public void save(Reservation rate) {repository.save(rate);}

    public Reservation get(int id) {return repository.findById(id).get();}

    public void delete(int id) {repository.deleteById(id);}

}
