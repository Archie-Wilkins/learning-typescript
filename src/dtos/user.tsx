import { generateUUID } from "../helpers/uuid"

export class User {
    id: string; 
    firstName: string;
    lastName: string;
    description: string;
    city: string;

    constructor(firstName: string, lastName: string, 
        description: string, city: string) {
            this.id = generateUUID();
            this.firstName = firstName;
            this.lastName = lastName;
            this.description = description;
            this.city = city;
    }

    toString(): string {
        return `User Details:
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Description: ${this.description}
        City: ${this.city}`;
    }
}