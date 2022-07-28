package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int Id;
    private int parkingId;
    private int userId;
    private int spotId;
    private String date;
    private int vehicleId;
    private float totalRate;

    public Reservation(int id, int parkingId, int userId, int spotId, String date, String rateType, int vehicleId, float totalRate) {
        this.Id = id;
        this.parkingId = parkingId;
        this.userId = userId;
        this.spotId = spotId;
        this.date = date;
        this.vehicleId = vehicleId;
        this.totalRate = totalRate;
    }

    public Reservation() {

    }



    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getParkingId() {return parkingId;}

    public void setParkingId(int parkingId) {this.parkingId = parkingId;}

    public int getUserId() {return userId;}

    public void setUserId(int userId) {this.userId = userId;}

    public int getSpotId() {return spotId;}

    public void setSpotId(int spotId) {this.spotId = spotId;}

    public String getDate() {return date;}

    public void setDate(String date) {this.date = date;}

    public int getVehicleId() {return vehicleId;}

    public void setVehicleId(int vehicleId) {this.vehicleId = vehicleId;}

    public float getTotalRate() {return totalRate;}

    public void setTotalRate(float totalRate) {this.totalRate = totalRate;}

}
