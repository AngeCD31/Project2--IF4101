package ucr.parkingprojectspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ucr.parkingprojectspringboot.domain.Rol;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
}
