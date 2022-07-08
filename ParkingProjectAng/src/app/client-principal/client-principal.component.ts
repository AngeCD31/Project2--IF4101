import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ParkingService } from '../services/parking-services';
import { ReservationService } from '../services/reservation-service';

@Component({
  selector: 'app-client-principal',
  templateUrl: './client-principal.component.html',
  styleUrls: ['./client-principal.component.css']
})
export class ClientPrincipalComponent implements OnInit {

  parkings:any=[];
  bookings:any=[];

  constructor(public rest: ParkingService, public rest2: ReservationService, private route: ActivatedRoute, private router: Router) { }

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
        this.fillParkingsTable();
    });
  }

  fillParkingsTable(){
    var html = '';
            $.each(this.parkings, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.city + '</td>';
                html += '<td>' + item.availableSpace + '</td>';                

                html += '<td><button data-toggle="modal" data-target="#modalParkings" onclick="return GetSpots(\'' + item.name + '\');" id="details">Details</button></td>';
                html += '</tr>';
            });

            $('#parking-tbody').html(html);
  }

  getBookings(){
    this.bookings  = [];
    this.rest2.get().subscribe((data:{}) => {
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
              html += '<td>' + item.spot.number + '</td>';
              html += '<td>' + item.date + '</td>';
              html += '<td>' + item.checkinTime + '</td>';
              html += '<td>' + item.checkoutTime + '</td>';
              html += '<td><button data-toggle="modal" data-target="#modalUpdateBookings" class="submit-btn" onclick="return GetByIdBooking(\'' + item.id + '\')" id="edit">Edit</button></td>';
              html += '<td><button data-toggle="modal" data-target="#modalDeleteBooking" class="submit-btn" onclick="showWarningBooking(\'' + item.id + '\')" id="edit">Delete</button></td>';
              html += '</tr>';
          });

          $('#bookings-tbody').html(html);
        
  }

}
