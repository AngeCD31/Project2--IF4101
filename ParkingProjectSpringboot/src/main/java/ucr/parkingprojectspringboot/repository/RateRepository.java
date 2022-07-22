package ucr.parkingprojectspringboot.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.Rate;

import javax.transaction.Transactional;
import java.util.List;

import java.util.List;

@Repository
public interface RateRepository extends JpaRepository<Rate, Integer> {



}
