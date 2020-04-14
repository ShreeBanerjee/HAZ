import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteNames } from '@models/constants';
import { CommonService } from '@providers/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  /* Funtion to Navigate */
  navigateTo(url) {
    this.commonService.navigateModule(url);
  }
}
