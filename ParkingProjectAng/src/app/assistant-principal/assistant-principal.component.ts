import { Component, OnInit } from '@angular/core';
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

  constructor(public rest: UserService, public rest2: VehicleService, public rest3: ReservationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getClients(this.clientsTemp);
    this.getVehicles();
    this.getBookings();
  }

  loginOut(){
    this.router.navigate(['/login']);
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
        this.fillClientsTable();
    });
  }

  fillClientsTable(){
    var html = '';
            $.each(this.clients, function (key, item) {
              html += '<tr>';
              html += '<td>' + item.id + '</td>';
              html += '<td>' + item.name + '</td>';
              html += '<td>' + item.email + '</td>';               
              html += '<td><button data-toggle="modal" data-target="#modalUpdateClientAsistant" class="submit-btn" onclick="return GetByIdClient(\'' + item.id + '\')" id="edit">Edit</button></td>';
              html += '<td><button data-toggle="modal" data-target="#modalDeleteClientAssistant" class="submit-btn" onclick="showWarningClients(\'' + item.id + '\')" id="edit">Delete</button></td>';
              html += '</tr>';
            });

          $('#clientsassistant-tbody').html(html);
  }

  getVehicles(){
    this.vehicles  = [];
    this.rest2.get().subscribe((data:{}) => {
        console.log(data);
        this.vehicles = data;
        this.fillVehiclesTable();
    });
  }

  fillVehiclesTable(){
    var html = '';
            $.each(this.vehicles, function (key, item) {
              html += '<tr>';
              html += '<td>' + item.id + '</td>';
              html += '<td>' + item.name + '</td>';
              html += '<td>' + item.color + '</td>';
              html += '<td>' + item.type + '</td>';
              html += '<td><button data-toggle="modal" data-target="#modalUpdateVehicleAsistant" class="submit-btn" onclick="return GetByIdVehicle(\'' + item.id + '\')" id="edit">Edit</button></td>';
              html += '<td><button data-toggle="modal" data-target="#modalDeleteVehicleAssistant" class="submit-btn" onclick="showWarningVehicles(\'' + item.id + '\')" id="edit">Delete</button></td>';
              html += '</tr>';       
      });

      $('#vehiclesassistant-tbody').html(html);
  }

  getBookings(){
    this.bookings  = [];
    this.rest3.get().subscribe((data:{}) => {
        console.log(data);
        this.bookings = data;
        this.fillBookingsTable();
    });
  }

  fillBookingsTable(){
    var html = '';
            $.each(this.bookings, function (key, item) {
              html += '<tr>';
              html += '<td>' + item.id + '</td>';
              html += '<td>' + item.parking.name + '</td>';
              html += '<td>' + item.user.id + '</td>';
              html += '<td>' + item.spot.id + '</td>';
              html += '<td>' + item.date + '</td>';
              html += '<td>' + item.checkinTime + '</td>';
              html += '<td>' + item.checkoutTime + '</td>';
              html += '<td>' + item.vehicle.id + '</td>';

              html += '<td><button class="submit-btn" onclick="ApproveBooking(\'' + item.user.email + '\');">Approve</button></td>';
              html += '<td><button class="submit-btn" onclick="RejectBooking(\'' + item.user.email + '\');">Reject</button></td>';
              html += '</tr>';
          });

          $('#bookingsassistant-tbody').html(html);
        
  }



}
