import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ParkingService } from '../services/parking-services';
import { RolService } from '../services/rol-service';
import { UserService } from '../services/user-service';
import { VehicleService } from '../services/vehicle-service';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {

  parkings:any=[];
  rols:any=[];

  constructor(public rest: ParkingService, 
              public rest2: UserService,
              public rest3: VehicleService,
              public rest4: RolService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.getParkings();
    this.getRols();
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

              html += '<td><button data-toggle="modal" data-target="#modalUpdate" class="submit-btn" onclick="return GetById(\'' + item.id + '\')" id="edit">Edit</button></td>';
              html += '<td><button data-toggle="modal" data-target="#modalDelete" class="submit-btn" onclick="showWarning(\'' + item.id + '\')" id="edit">Delete</button></td>';
              html += '</tr>';

          });

          $("#parkingadmin-tbody").html(html);
  }

  getRols(){
    this.rols  = [];
    this.rest4.get().subscribe((data:{}) => {
        console.log(data);
        this.rols = data;
        this.fillRolsTable();
    });
  }

  fillRolsTable(){
    var html = '';
            $.each(this.rols, function (key, item) {
              html += '<tr>';
                html += '<td>' + item.idRol + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '</tr>';
            });

            $('#userroles-tbody').html(html);
  }

}
