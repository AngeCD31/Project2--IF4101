package ucr.parkingprojectspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ucr.parkingprojectspringboot.domain.Spot;

@Repository
public interface SpotRepository extends JpaRepository<Spot, Integer> {
}
