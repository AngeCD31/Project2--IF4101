package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;


@Entity
@Table(name = "Rol")
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdRol;
    private String name;

    public Rol(int idRol, String name) {
        this.IdRol = idRol;
        this.name = name;
    }

    public Rol() {

    }

    public int getIdRol() {
        return IdRol;
    }

    public void setIdRol(int idRol) {
        IdRol = idRol;
    }

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

}
