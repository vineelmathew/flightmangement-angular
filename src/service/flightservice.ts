import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FlightSchedule } from 'src/model/flightschedule';
import { observable, Observable } from 'rxjs';
@Injectable()
export class FlightService
{
url="http://localhost:8585/schedules";
constructor(private http:HttpClient)
{

}
addFlightSchedule(flightschedule:FlightSchedule):Observable<FlightSchedule>
{
    let addurl=this.url+"/add";
    let observable:Observable<FlightSchedule>=this.http.post<FlightSchedule>(addurl,FlightSchedule);
    return observable;
}

}