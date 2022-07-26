package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Rate")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int amount;
    private String type;
    public Rate() {

    }
    public Rate(int id, int amount, String type) {
        this.setId(id);
        this.setAmount(amount);
        this.setType(type);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getAmount() {return amount;}

    public void setAmount(int amount) {this.amount = amount;}

}