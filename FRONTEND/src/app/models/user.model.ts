export class User {
    public lastName: string;
    public firstName: string;
    public street: string;
    public zipcode: number;
    public city: string;
    public phone: string;
    public email: string;
    public sexe: string;
    public password: string;
    public login: string;
    public country: string;

    constructor(lastName: string, firstName: string, street: string, zipcode: number, city: string, phone: string, email: string, sexe: string, password: string, login: string, country: string) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.street = street;
      this.zipcode = zipcode;
      this.city = city;
      this.phone = phone; 
      this.email = email;
      this.sexe = sexe;
      this.password = password; 
      this.login = login; 
      this.country = country;
    }
  }