import { Component, OnInit } from '@angular/core';
import { CommonService } from '@providers/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  /* Funtion to Navigate */

  navigateTo(url) {
    console.log('The next route :-', url);
    this.commonService.navigateModule(url);
  }

}
