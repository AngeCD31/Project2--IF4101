package ucr.parkingprojectspringboot.domain;

import javax.persistence.*;

@Entity
@Table(name = "Parking")
public class Parking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String name;
    private String city;
    private int capacity;
    private int availableSpace;
    private int occupiedSpace;

    public Parking(String name, String city, int capacity, int availableSpace, int occupiedSpace) {
        this.name = name;
        this.city = city;
        this.capacity = capacity;
        this.availableSpace = availableSpace;
        this.occupiedSpace = occupiedSpace;
    }

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public String getCity() {return city;}
    public void setCity(String city) {this.city = city;}
    public int getCapacity() {return capacity;}
    public void setCapacity(int capacity) {this.capacity = capacity;}
    public int getAvailableSpace() {return availableSpace;}
    public void setAvailableSpace(int availableSpace) {this.availableSpace = availableSpace;}
    public int getOccupiedSpace() {return occupiedSpace;}
    public void setOccupiedSpace(int occupiedSpace) {this.occupiedSpace = occupiedSpace;}

}
