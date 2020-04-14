import { Component, OnInit } from '@angular/core';
import { SessionService } from './providers/services/session.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sessionService: SessionService, ) { }
  ngOnInit(): void {
    this.sessionService.setTitle(environment.pageTitle);
  }

}
