import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../model/Employee';

@Component({
  selector: 'first-form',
  templateUrl: './firstform.component.html',
  styleUrl: './firstform.component.css',
})
export class FirstForm {
  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];
  constructor() {
    this.createdForm();
    const olddata = localStorage.getItem('Empdata');
    if (olddata != null) {
      const parsedata = JSON.parse(olddata);
      this.employeeList = parsedata;
    }
  }

  createdForm() {
    this.employeeForm = new FormGroup({
      empid: new FormControl(this.employeeObj.emailId),
      country: new FormControl(this.employeeObj.country),
      name: new FormControl(this.employeeObj.name, [Validators.required]),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      add: new FormControl(this.employeeObj.add),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailid: new FormControl(this.employeeObj.emailId),
      pinCode: new FormControl(this.employeeObj.pinCode, [
        Validators.required,
        Validators.minLength(4),
      ]),
      state: new FormControl(this.employeeObj.state),
    });
  }
  onSave() {
    const olddata = localStorage.getItem('EmpData');
    if (olddata != null) {
      const parsedata = JSON.parse(olddata);
      this.employeeForm.controls['empId'].setValue(parsedata.length + 1);
      this.employeeList.unshift(this.employeeForm.value);
    } else {
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem('empData', JSON.stringify(this.employeeList));
    //  add  reset
    this.reset();
  }

  onEdit(item: EmployeeModel) {
    this.employeeObj = item;
    this.createdForm();
  }

  reset() {
    this.employeeObj = new EmployeeModel();
    this.createdForm();
  }

  onUpdate() {
    const record = this.employeeList.find(
      (n) => n.empId == this.employeeForm.controls['empId'].value
    );

    if (record != undefined) {
      record.address = this.employeeForm.controls['address'].value;
      record.name = this.employeeForm.controls['name'].value;
      record.contactNo = this.employeeForm.controls['contactNo'].value;
      record.emailId = this.employeeForm.controls['empId'].value;
      record.add = this.employeeForm.controls['add'].value;
      record.pinCode = this.employeeForm.controls['pinCode'].value;
      record.country = this.employeeForm.controls['country'].value;
      record.city = this.employeeForm.controls['city'].value;
    }
    localStorage.setItem('Empdata', JSON.stringify(this.employeeList));
    this.reset();
  }

  onDelete(id: number) {
    const isDelete = confirm('are you sure want to delete');
    if (isDelete) {
      const index = this.employeeList.findIndex((m) => m.empId == id);
      this.employeeList.splice(index, 1);
      localStorage.setItem('Empdata', JSON.stringify(this.employeeList));
    }
  }

  onCopy(item: EmployeeModel) {
    const copiesEmplayee = { ...item };
    copiesEmplayee.empId = this.employeeList.length + 1;
    copiesEmplayee.name = `${item.name}.copy`;
    this.employeeList.push(copiesEmplayee);
    localStorage.setItem('Empdata', JSON.stringify(this.employeeList));
  }
}
