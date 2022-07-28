import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ReservationService } from '../services/reservation-service';
import { UserService } from '../services/user-service';
import { VehicleService } from '../services/vehicle-service';

@Component({
  selector: 'app-assistant-principal',
  templateUrl: './assistant-principal.component.html',
  styleUrls: ['./assistant-principal.component.css']
})
export class AssistantPrincipalComponent implements OnInit {

  clients:any=[];
  clientsTemp:any=[];
  vehicles:any=[];
  bookings:any=[];

  @Input() vehicleData = {name:'',color:'',type:'',clientId:0}

  constructor(public rest: UserService, public rest2: VehicleService, public rest3: ReservationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getClients(this.clientsTemp);
    this.getVehicles();
    this.getBookings();
  }

  loginOut(){
    this.router.navigate(['/login']);
  }

  addVehicle(){
    this.rest2.add(this.vehicleData).subscribe((result) => {
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  deleteVehicle(id:any){
    this.rest2.delete(id).subscribe( 
      (data) =>{
        console.log("click");

        this.ngOnInit();

      })
  }


  getClients(clientsTemp:any){
    this.clients  = [];
    this.rest.get().subscribe((data:{}) => {
        console.log(data);
        $.each(data, function (key, item) {
          if(item.rolId==3){
            clientsTemp.push(item);
          }
      });
        this.clients = clientsTemp;
    });
  }

  getVehicles(){
    this.vehicles  = [];
    this.rest2.get().subscribe((data:{}) => {
        console.log(data);
        this.vehicles = data;
    });
  }

  clearAddVehicle(){
    $('#nameAddVehicle').val('');
    $('#colorAddVehicle').val('');
    $('#typeAddVehicle').val('');
    $('#clientIdAddVehicle').val('');
  }

  getBookings(){
    this.bookings  = [];
    this.rest3.get().subscribe((data:{}) => {
        console.log(data);
        this.bookings = data;
    });
  }



}
