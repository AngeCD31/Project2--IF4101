package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Rate")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private float hourRate;
    public Rate() {}

    public Rate(float hourRate) {
        this.hourRate = hourRate;
    }
    
    public float getHourRate() {return hourRate;}

    public void setHourRate(float hourRate) {this.hourRate = hourRate;}

}