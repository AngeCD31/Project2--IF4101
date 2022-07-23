package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Rate")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int amount;
    private String type;
    public Rate() {

    }
    public Rate(int amount, String type) {
        this.amount = amount;
        this.type = type;
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