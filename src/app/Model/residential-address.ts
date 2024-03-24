export class ResidentialAddress {
  AddressId: number;
  AddressLine1: string;
  AddressLine2: string;
  Landmark: string;
  State: string;
  City: string;
  Pincode: string;
  AccountUserId: number;

  constructor() {
    this.AddressId = 0;
    this.AddressLine1 = '';
    this.AddressLine2 = '';
    this.Landmark = '';
    this.State = '';
    this.City = '';
    this.Pincode = '';
    this.AccountUserId = 0;
  }
}
