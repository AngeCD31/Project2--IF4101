package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "`User`")

@NamedStoredProcedureQuery(name = "User.SelectUserByName",procedureName = "SelectUserByName", parameters = {
        @StoredProcedureParameter(mode = ParameterMode.IN, name = "Name", type = String.class)})

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String name;
    private String email;
    private String password;

    private int rolId;

    public User(int id, String name, String email, String password, int idRol) {
        this.Id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.rolId = idRol;
    }

    public User() {

    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRol() {
        return rolId;
    }

    public void setRol(int idRol) {
        this.rolId = idRol;
    }

}
