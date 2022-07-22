package ucr.parkingprojectspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ucr.parkingprojectspringboot.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
