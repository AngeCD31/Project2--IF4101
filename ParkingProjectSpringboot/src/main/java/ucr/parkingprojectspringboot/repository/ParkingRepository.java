package ucr.parkingprojectspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ucr.parkingprojectspringboot.domain.Parking;

@Repository
public interface ParkingRepository extends JpaRepository<Parking, Integer> {
}
