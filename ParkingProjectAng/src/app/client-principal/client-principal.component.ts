import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ParkingService } from '../services/parking-services';
import { ReservationService } from '../services/reservation-service';
import { SpotService } from '../services/spot-service';

@Component({
  selector: 'app-client-principal',
  templateUrl: './client-principal.component.html',
  styleUrls: ['./client-principal.component.css']
})
export class ClientPrincipalComponent implements OnInit {

  parkings:any=[];
  bookings:any=[];
  spots:any=[];

  constructor(public rest: ParkingService, public rest2: ReservationService,
              public rest3: SpotService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getParkings();
    this.getBookings();
  }
  

  loginOut(){
    this.router.navigate(['/login']);
  }

  getParkings(){
    this.parkings  = [];
    this.rest.get().subscribe((data:{}) => {
        console.log(data);
        this.parkings = data;
    });
  }

  getSpots(id:any){
    this.spots  = [];
    this.rest3.getByParking(id).subscribe((data: {}) => {
        console.log(data);
        this.spots = data;
        this.fillSpotsTable();
    });
  }

  fillSpotsTable(){
    var html = '<tr>'; 
    var id = 1;

    for (var i = 0; i < this.spots.length; i++) {
        while (id <= 3) {
            if (i < this.spots.length) {  

                let text1 = "selectedSpot";
                let text2 = this.spots[i].id;
                let result1 = text1.concat(text2);
                //reservation.parkingId = spots[i].parking.id;
                //reservation.spotRate = spots[i].rate.hourRate;

                switch (this.spots[i].available) {
                    case "Yes":
                        switch (this.spots[i].preferential) {
                            case "Yes":                                       
                                html += '<td><button id="' + result1 + '"  style="background-color:blue;" onclick="return SaveSpot(\'' + this.spots[i].id + '\');"> </button></td>';
                                break;
                            case "No":
                                html += '<td><button id="' + result1 + '" style="background-color:green;" onclick="return SaveSpot(\'' + this.spots[i].id + '\');"> </button></td>';
                                break;
                        }
                        break;
                    case "No":
                        html += '<td><button style=background-color:red;> </button></td>';
                        break;
                }
            }
            if (id < 3) { 
                i++;
            }
            id++;
        }
        html += '</tr>';
        html += '<tr>'; 
        id = 1;
    }

    $('#spots-tbody').html(html);
  }

  getBookings(){
    this.bookings  = [];
    this.rest2.get().subscribe((data:{}) => {
        console.log(data);
        this.bookings = data;
    });
  }

}
