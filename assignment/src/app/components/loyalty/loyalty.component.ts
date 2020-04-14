import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from '@providers/services/common.service';
import { ApiService } from 'src/app/api.service';
import { Constants } from '@models/constants';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  guestName: any;
  guestInitials: any;
  customer: any;

  constructor(private commonService: CommonService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getCustomerDetails();
  }

  /* Funtion to fetch data */

  getCustomerDetails() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.Customer);
    this.customer = data;
    this.guestName = this.apiService.guestName;
    this.guestInitials = this.apiService.guestInitials;
  }

  /* Funtion to Navigate */

  navigateTo(url) {
    this.commonService.navigateModule(url);
  }
}
