package ucr.parkingprojectspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ucr.parkingprojectspringboot.domain.User;
import ucr.parkingprojectspringboot.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> listAll() {
        return repository.findAll();
    }

    public void save(User user) {
        repository.save(user);
    }

    public User get(int id) {
        return repository.findById(id).get();
    }

    public User getByName(String name) {
        List<User> users = repository.findByName(name);
        return users.get(0);

    }

    public void delete(int id) {
        repository.deleteById(id);
    }

}
