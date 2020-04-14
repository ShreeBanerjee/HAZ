import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Constants } from '@models/constants';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customer: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getCustomerDetails();
  }

  /* Funtion to fetch data */

  getCustomerDetails() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.Customer);
    this.customer = data;
    // tslint:disable-next-line: no-string-literal
    this.customer['initials'] = this.customer.firstName.charAt(0).toUpperCase() +
    this.customer.lastName.charAt(0).toUpperCase();
  }

}
