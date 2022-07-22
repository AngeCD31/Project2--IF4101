package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Spot")
public class Spot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int parkingId;
    private int number;
    private String preferential;
    private String available;
    private int rateId;

    public Spot(){}
    public Spot(int parkingId, int number, String preferential, String available, int rateId) {
        this.parkingId = parkingId;
        this.number = number;
        this.preferential = preferential;
        this.available = available;
        this.rateId = rateId;
    }

    public int getParkingId() {return parkingId;}
    public void setParkingId(int parkingId) {this.parkingId = parkingId;}
    public int getNumber() {return number;}
    public void setNumber(int number) {this.number = number;}
    public String getPreferential() {return preferential;}
    public void setPreferential(String preferential) {this.preferential = preferential;}
    public String getAvailable() {return available;}
    public void setAvailable(String available) {this.available = available;}
    public int getRateId() {return rateId;}
    public void setRateId(int rateId) {this.rateId = rateId;}

}
