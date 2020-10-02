export class Airport
{
    private code:string;
    private name:string;
    private location:string;
    constructor(code:string,name:string,location:string)
    {
        this.code=code;
        this.name=name;
        this.location=location;
    }
    getCode()
    {
        return this.code;
    }
    getName()
    {
        return this.name;
    }
    getLocation()
    {
        return this.location;
    }
}