import { Flight } from './flight';
import { Schedule } from './schedule';

export class FlightSchedule
{
private flight:Flight;
private availableSeats:number;
private schedule:Schedule;

constructor(flight:Flight,availableSeats:number,schedule:Schedule)
{
    this.flight=flight;
    this.availableSeats=availableSeats;
    this.schedule=schedule;
}
getFlight()
{
    return this.flight;
}
getAvailableSeats()
{
    return this.availableSeats;
}
getSchedule()
{
    return this.schedule;
}


}