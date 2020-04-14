import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/providers/services/common.service';
import { ApiService } from 'src/app/api.service';
import { Constants } from '@models/constants';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  logs: any;
  guestName: any;
  guestInitials: any;

  constructor(private commonService: CommonService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getlogs();
  }

  /* Initial Data Fetched */

  getlogs() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.Logs);
    this.logs = data;
    this.guestName = this.apiService.guestName;
    this.guestInitials = this.apiService.guestInitials;
    this.getSentEmailDateTime();
  }

  /* Format Date Time */

  getSentEmailDateTime() {
    for (const log of this.logs) {
      const showDateTime = new Date(log.sentDate).toDateString();
      // tslint:disable-next-line: no-string-literal
      log['showDate'] = showDateTime.replace(/\s/, ', ');
      const formatTime = this.formatAMPM(new Date(log.sentDate));
      // tslint:disable-next-line: no-string-literal
      log['showDate'] = log['showDate'] + ' - ' + formatTime;
    }
  }

  /* Set Am/PM format */

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ampm;
    return strTime;
  }

  /* Function to navigate */

  navigateTo(url) {
    console.log('The next route :-', url);
    this.commonService.navigateModule(url);
  }

}
