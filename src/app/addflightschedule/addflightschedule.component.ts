import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Airport } from 'src/model/airport';
import { Flight } from 'src/model/flight';
import { FlightSchedule } from 'src/model/flightschedule';
import { Schedule } from 'src/model/schedule';
import { FlightService } from 'src/service/flightservice';
@Component({
  selector: 'app-addflightschedule',
  templateUrl: './addflightschedule.component.html',
  styleUrls: ['./addflightschedule.component.css']
})
export class AddflightscheduleComponent implements OnInit {

  flightform:FormGroup;
  flightModelctrl:FormControl;
  seatsAvailablectrl:FormControl;
  carrierNamectrl:FormControl;
  seatsCapacityctrl:FormControl;
  sourceAirportctrl:FormControl;
  destinationAirportctrl:FormControl;
  arrivalTimectrl:FormControl;
  departureTimectrl:FormControl;  
  flights:Flight;
  schedule:Schedule;
  airport:Airport;
  flightschedule:FlightSchedule;

  
  constructor(fb:FormBuilder,private flightserv:FlightService) {
   this.arrivalTimectrl=fb.control('',[Validators.required]);
   this.carrierNamectrl=fb.control('',[Validators.required]);
   this.sourceAirportctrl=fb.control('',[Validators.required]);
   this.destinationAirportctrl=fb.control('',[Validators.required]);
   this.departureTimectrl=fb.control('',[Validators.required]);
   this.flightModelctrl=fb.control('',[Validators.required]);
   this.seatsAvailablectrl=fb.control('',[Validators.required]);
   this.seatsCapacityctrl=fb.control('',[Validators.required]);
   this.flightform=fb.group({
     seatsAvailable:this.seatsAvailablectrl,
     flightModel:this.flightModelctrl,
     carrierName:this.carrierNamectrl,
     seatsCapacity:this.seatsCapacityctrl,
     destinationAirport:this.destinationAirportctrl,
     sourceAirport:this.sourceAirportctrl,
     arrivalTime:this.arrivalTimectrl,
     departureTime:this.departureTimectrl,
   });
  }


  ngOnInit(): void {
  }
  addFlightSchedule()
  {
    let flightModel:string=this.flightModelctrl.value;
    let carrierName:string=this.carrierNamectrl.value;
    let seatsCapacity:number=this.seatsCapacityctrl.value;
    this.flights=new Flight(flightModel,carrierName,seatsCapacity);
    let sourceAirport:Airport=this.sourceAirportctrl.value;
    let destinationAirport:Airport=this.destinationAirportctrl.value;
    let arrivalTime:Date=this.arrivalTimectrl.value;
    let departureTime:Date=this.departureTimectrl.value;
    this.schedule=new Schedule(sourceAirport,destinationAirport,arrivalTime,departureTime);
    let seatsAvailable:number=this.seatsAvailablectrl.value;
    this.flightschedule=new FlightSchedule(this.flights,seatsAvailable,this.schedule);
    let observable:Observable<FlightSchedule>=this.flightserv.addFlightSchedule(this.flightschedule);
    observable.subscribe(
     flightarg=>{
       this.flightschedule=flightarg;
     },
     err=>
     {
       console.log("something is wrong is add flight schedule component "+err.message);
     }
    )
  }

}
