import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ParkingService } from '../services/parking-services';
import { RateService } from '../services/rate-services';
import { ReservationService } from '../services/reservation-service';
import { SpotService } from '../services/spot-service';
import { VehicleService } from '../services/vehicle-service';

@Component({
  selector: 'app-client-principal',
  templateUrl: './client-principal.component.html',
  styleUrls: ['./client-principal.component.css']
})
export class ClientPrincipalComponent implements OnInit {

  parkings:any=[];
  bookings:any=[];
  spots:any=[];
  vehicles:any=[];
  rates:any=[];
  savedSpot:any=0;
  spot:any;
  user:any;
  parking:any;

  @Input() reservation = {parkingId:0, userId:0, spotId:0, date:'', vehicleId:0, totalRate:0};

  constructor(public rest: ParkingService, public rest2: ReservationService,
              public rest3: SpotService,
              public rest4: VehicleService,
              public rest5: LoginService,
              public rest6: RateService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getParkings();
    this.getBookings();
    this.getVehicles();
    this.getRates();
    $('#getSpotButton').prop('disabled', true);
    this.user = this.rest5.getSession();

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
    this.parking=id;
    this.rest3.getByParking(id).subscribe((data: {}) => {
        console.log(data);
        this.spots = data;
    });
  }

  saveSpot(id:number){
    if(this.savedSpot!=0){
      this.getSpotById(this.savedSpot);
      if(typeof(this.spot) !== 'undefined' && this.spot.preferential=='Yes'){
        $("#"+this.savedSpot).css('background-color', 'blue');
      }
      else{
        $("#"+this.savedSpot).css('background-color', 'green');
      }
    }
      this.savedSpot=id;
      $('#getSpotButton').prop('disabled', false);
      $("#"+id).css('background-color', 'white');
  }

  saveBooking(){
    this.reservation.parkingId=this.parking;
    this.reservation.spotId=this.savedSpot;
    this.reservation.userId=this.user.userId;
      this.rest2.add(this.reservation).subscribe((result) => {
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  deleteBooking(id:any){
    this.rest2.delete(id).subscribe( 
      (data) =>{
        console.log("click");

        this.ngOnInit();

      })
  }

  deselectSpot(){
    this.savedSpot=0;
    $('#getSpotButton').prop('disabled', true);
  }

  getSpotById(id:any){
    this.spots.forEach((element: { id: any; }) => {
      if(element.id==id){
        this.spot = element;
      }
    });
  }

  getVehicles(){
    this.vehicles  = [];
    this.rest4.get().subscribe((data:{}) => {
        console.log(data);
        this.vehicles = data;
    });
  }

  getRates(){
    this.rates  = [];
    this.rest6.get().subscribe((data:{}) => {
        console.log(data);
        this.rates = data;
    });
  }

  getBookings(){
    this.bookings  = [];
    this.rest2.get().subscribe((data:{}) => {
        console.log(data);
        this.bookings = data;
    });
  }

}
