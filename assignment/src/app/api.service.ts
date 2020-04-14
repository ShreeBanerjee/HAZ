import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import GuestList from '@providers/json/guestList.json';
import MockSchema from '@providers/json/guestMock.json';
import { Constants } from '@models/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mockData: any;
  guestName: any;
  guestInitials: any;

  constructor(private httpClient: HttpClient) { }

  /* get part of json according to the module */
  doGetFromJson(name) {
    try {
      let data;
      if (!this.mockData) {
        this.getMockData();
      }
      switch (name) {
        case Constants.fileName.guestList:
          data = GuestList;
          break;
        case Constants.fileName.Customer:
          // tslint:disable-next-line: no-string-literal
          data = this.mockData['customer'];
          break;
        case Constants.fileName.Bookings:
          // tslint:disable-next-line: no-string-literal
          data = this.mockData['customer']['bookings'];
          break;
        case Constants.fileName.Logs:
          // tslint:disable-next-line: no-string-literal
          data = this.mockData['customer']['communicationLogs'];
          break;
        default:
          break;
      }
      return data;
    } catch (error) {
      console.log(`Error Status: ${error.status}\nMessage: ${error.message}`);
    }
  }

  /* get full mock json only for First time */
  getMockData() {
    this.mockData = MockSchema;
    // tslint:disable-next-line: no-string-literal
    this.guestName = this.mockData['customer']['name'];
    // tslint:disable-next-line: no-string-literal
    this.guestInitials = this.mockData['customer'].firstName.charAt(0).toUpperCase()
      // tslint:disable-next-line: no-string-literal
      + this.mockData['customer'].lastName.charAt(0).toUpperCase();
  }

}
