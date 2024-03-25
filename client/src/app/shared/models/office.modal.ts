// office.model.ts
export class Office {
    name: string = '';
    address: string = '';
    postcode: string = '';
    region: string  = '';
    city: string = '';
    country: string= '';
    headcount: number= 0;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor(data?: Partial<Office>) {
        this.location = { latitude: 37.4256448, longitude: -122.1703694 }; // default values
        Object.assign(this, data);
    }
}