package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int parkingId;
    private int userId;
    private int spotId;
    private String date;
    private String checkinTime;
    private String checkoutTime;
    private int vehicleId;
    private float totalRate;

    public Reservation (){}

    public Reservation(int parkingId, int userId, int spotId, String date, String checkinTime, String checkoutTime, int vehicleId, float totalRate) {
        this.parkingId = parkingId;
        this.userId = userId;
        this.spotId = spotId;
        this.date = date;
        this.checkinTime = checkinTime;
        this.checkoutTime = checkoutTime;
        this.vehicleId = vehicleId;
        this.totalRate = totalRate;
    }

    public int getParkingId() {return parkingId;}

    public void setParkingId(int parkingId) {this.parkingId = parkingId;}

    public int getUserId() {return userId;}

    public void setUserId(int userId) {this.userId = userId;}

    public int getSpotId() {return spotId;}

    public void setSpotId(int spotId) {this.spotId = spotId;}

    public String getDate() {return date;}

    public void setDate(String date) {this.date = date;}

    public String getCheckinTime() {return checkinTime;}

    public void setCheckinTime(String checkinTime) {this.checkinTime = checkinTime;}

    public String getCheckoutTime() {return checkoutTime;}

    public void setCheckoutTime(String checkoutTime) {this.checkoutTime = checkoutTime;}

    public int getVehicleId() {return vehicleId;}

    public void setVehicleId(int vehicleId) {this.vehicleId = vehicleId;}

    public float getTotalRate() {return totalRate;}

    public void setTotalRate(float totalRate) {this.totalRate = totalRate;}

}
