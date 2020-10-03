export class Flight
{

    private flightModel:string;
    private carrierName:string;
    private seatCapacity:number;
    constructor(flightModel:string,carrierName:string,seatCapacity:number)
    {
        this.carrierName=carrierName;
        this.seatCapacity=seatCapacity;
        this.flightModel=flightModel;
    }
    getCarrierName()
    {
        return this.carrierName;
    }
    getSeatCapacity()
    {
        return this.seatCapacity;
    }
    getFlightModel()
    {
        return this.flightModel;
    }
}