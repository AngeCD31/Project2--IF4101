import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { ParkingService } from '../services/parking-services';
import { RateService } from '../services/rate-services';
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
  rates:any=[];
  vehicles:any=[];
  rate:any;
  @Input() rateData = {type:'', amount:0};

  constructor(public rest: ParkingService, 
              public rest2: UserService,
              public rest3: VehicleService,
              public rest4: RolService,
              public rest5: RateService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.getParkings();
    this.getRols();
    this.getRates();
    this.getVehicles();
    this.setTypesRate();
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

  getRols(){
    this.rols  = [];
    this.rest4.get().subscribe((data:{}) => {
        console.log(data);
        this.rols = data;
    });
  }

  getVehicles(){
    this.vehicles  = [];
    this.rest3.get().subscribe((data:{}) => {
        console.log(data);
        this.vehicles = data;
    });
  }

  setTypesRate(){
    var html = '';
    html += '<option value="ByHour">ByHour</option>';  
    html += '<option value="ByDay">ByDay</option>';  
    html += '<option value="ByWeek">ByWeek</option>';   
    html += '<option value="ByMonth">ByMonth</option>'; 
    html += '<option value="ByYear">ByYear</option>';                 
    $('#typeAddRate').append(html);
  }
  
  getRates(){
    this.rates  = [];
    this.rest5.get().subscribe((data:{}) => {
        console.log(data);
        this.rates = data;
    });
  }

  getRateById(id:any){
    this.rest5.getById(id).subscribe((data: {}) => {
      console.log(data);
      this.rate = data;
        $('#amountUpdateRate').val(this.rate.amount);
        $('#typeUpdateRate').val(this.rate.type);              
    });     
  }

  addRate(){
    this.rest5.add(this.rateData).subscribe((result) => {
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  clearAddRate(){
    $('#typeAddRate').val('');
    $('#amountAddRate').val('');       
  }

  deleteRate(id:any){
    this.rest5.delete(id).subscribe( 
      (data) =>{
        console.log("click");

        this.ngOnInit();

      })
    }

    deleteRol(id:any){
      this.rest4.delete(id).subscribe( 
        (data) =>{
          console.log("click");
  
          this.ngOnInit();
  
        })
      }

}
