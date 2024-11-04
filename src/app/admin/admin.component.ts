import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface User {
  city: any;
  state: any;
  country: any;
  address1: any;
  address2: any;
  phone: any;
  email: any;
  name: string;
  age: number;
}

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class Admin {
  myForm: FormGroup;
  dataSource: User[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.editIndex !== null) {
        this.dataSource[this.editIndex] = this.myForm.value;
        this.editIndex = null; // Reset edit index
      } else {
        this.dataSource.push(this.myForm.value);
      }
      this.myForm.reset();
    }
  }

  onEdit(index: number) {
    this.editIndex = index;
    this.myForm.patchValue(this.dataSource[index]);
  }

  onDelete(index: number) {
    this.dataSource.splice(index, 1);
  }
}
