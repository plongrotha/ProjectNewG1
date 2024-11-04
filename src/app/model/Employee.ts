export class EmployeeModel {
  empId: number;
  name: string;
  city: string;
  state: string;
  emailId: string;
  contactNo: number;
  address: string;
  add: string;
  pinCode: number;
  country: string;

  constructor() {
    this.address = '';
    this.add = '';
    this.city = '';
    this.contactNo = 0;
    this.emailId = '';
    this.empId = 1;
    this.name = '';

    this.pinCode = 0;
    this.state = '';
    this.country = '';
  }
}
