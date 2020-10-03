import { Airport } from './airport';

export class Schedule
{

    private sourceAirport:Airport;
    private destinationAirport:Airport;
    private arrivalTime:Date;
    private departureTime:Date;
    constructor(sourceAirport:Airport,destinationAirport:Airport,arrivalTime:Date,departureTime:Date)
    {
        this.arrivalTime=arrivalTime;
        this.departureTime=departureTime;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
    }
    getSourceAiport()
    {
        return this.sourceAirport;

    }
    getDestinationAirport()
    {
        return this.destinationAirport;
    }
    getArrivalTime()
    {
        return this.arrivalTime;
    }
    getDepartureTime()
    {
        return this.departureTime;
    }


}