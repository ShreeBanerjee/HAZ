import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/* Service Imports */
import { CommonService } from 'src/app/providers/services/common.service';
import { ApiService } from 'src/app/api.service';
import { DataService } from '@providers/services/data.service';
import { Constants } from '@models/constants';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  guestName: any;
  guestInitials: any;
  guestForm: FormGroup;
  customer: any;

  constructor(private formBuilder: FormBuilder,
              private commonService: CommonService,
              private apiService: ApiService,
              private dataService: DataService) {
                this.createFormGroup();
  }

  ngOnInit() {
    this.getCustomerDetails();
    this.initiateData();
  }

  /* Fetch initial Data */

  getCustomerDetails() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.Customer);
    this.customer = data;
    this.guestName = this.apiService.guestName;
    this.guestInitials = this.apiService.guestInitials;
  }

  /* Initial data fetch from stored data */

  initiateData() {
    this.guestForm.setValue(this.dataService.getGuestDetails());
  }

  /* Reactives Forms used for better usage */

  createFormGroup() {
    this.guestForm = this.formBuilder.group({
      name: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      street1: [''],
      street2: [''],
      city: [''],
      postalCode: [''],
      country: [''],
      language: [''],
      gender: [''],
      birthday: [''],
      jobTitle: ['']
    });
  }

  /* Data stored in service */

  storedata() {
    this.dataService.setGuestDetails(this.guestForm.value);
  }

  /* Funtion to navigate */

  navigateTo(url) {
    this.commonService.navigateModule(url);
  }
}
