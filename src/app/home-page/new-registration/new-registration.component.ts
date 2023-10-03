import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegServiceService } from '../service/reg-service.service';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {
  userForm: FormGroup;
  private regData: any[] = [];

  constructor(private fb: FormBuilder,
    private regService: RegServiceService) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.createAddress()])
    });
  }
  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  ngOnInit(): void {
  }

  addAddress(): void {
    this.addresses.push(this.createAddress());
  }

  createAddress(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  onSubmit(): void {
    this.regService.setdata(this.userForm.value);
    this.userForm.reset();
    alert("User registered successfully!!!");
  }

}
