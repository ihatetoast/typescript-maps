import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  firstName: string;
  lastName: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.city = faker.address.cityName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <p class="customerName">Customer: <br />${
          this.firstName
        } ${this.lastName.charAt(0)}.
        </p>
      </div>`;
  }
}
