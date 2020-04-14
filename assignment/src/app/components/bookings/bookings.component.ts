import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/providers/services/common.service';
import { Constants } from '@models/constants';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any;
  guestName: any;
  guestInitials: any;
  cancelledCount: any = 0;
  bookingCount: any = 0;

  constructor(private commonService: CommonService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getBookings();
  }

  /* Initial data fetched */

  getBookings() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.Bookings);
    this.bookings = data;
    this.guestName = this.apiService.guestName;
    this.guestInitials = this.apiService.guestInitials;
    this.calculateCancellations();
  }

  /* Count to calculate bookings */

  calculateCancellations() {
    for (const booking of this.bookings) {
      booking.status && booking.status === Constants.status.CANCELLED ? this.cancelledCount++ : this.bookingCount++;
      const showDate = new Date(booking.arrivalDate).toDateString();
      // tslint:disable-next-line: no-string-literal
      booking['showDate'] = showDate.replace(/\s/, ', ');
      // tslint:disable-next-line: no-string-literal
      booking['lengthOfStay'] = this.calculateLengthOfStay(
        new Date(booking.departureDate), new Date(booking.arrivalDate));
    }
  }

  /* Method to calculate length of stay */

  calculateLengthOfStay(departureDate, arrivalDate) {
    return (departureDate - arrivalDate) / (1000 * 3600 * 24);
  }

  /* Function to navigate */

  navigateTo(url) {
    this.commonService.navigateModule(url);
  }

}
