package com.example.apibookings.domain;

//import org.springframework.data.repository.query.Param;
import javax.persistence.*;

@Entity
@Table(name = "Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int parkingId;
    private int userId;
    private int spotId;
    private int vehicleId;
    private String date;
    private String CheckinTime;
    private String CheckoutTime;
    private float totalRate;

    public Reservation(){

    }

    public Reservation(int parkingId, int userId, int spotId, int vehicleId, String date, String CheckinTime, String CheckoutTime, float totalRate) {
        this.parkingId = parkingId;
        this.userId = userId;
        this.spotId = spotId;
        this.vehicleId = vehicleId;
        this.date = date;
        this.CheckinTime = CheckinTime;
        this.CheckoutTime = CheckoutTime;
        this.totalRate = totalRate;
    }


}
