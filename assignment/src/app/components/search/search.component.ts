import { Component, OnInit } from '@angular/core';
import { CommonService } from '@providers/services/common.service';
import { ApiService } from 'src/app/api.service';
import { Constants } from '@models/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  guestList = [];

  constructor(private commonService: CommonService, private apiService: ApiService) {
  }

  ngOnInit() {
    this.getGuestList();
  }

  /* Fetch Initial data */

  getGuestList() {
    const data = this.apiService.
      doGetFromJson(Constants.fileName.guestList);
    this.guestList = data;
  }

/* Funtion to Navigate */

  navigateTo(url) {
    this.commonService.navigateModule(url);
  }
}
