import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
    constructor(private titleService: Title) {}

    /* Set title from environments */
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
      }
}