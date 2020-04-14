import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import MockSchema from '@providers/json/guestMock.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    guestDetails: any = {};
    mockData = {};

    constructor() {
        /* For dynamic rendering from Json */
        this.initialData();
    }

    /* For Gfirst time data load */
    initialData() {
        // tslint:disable-next-line: no-string-literal
        this.mockData = MockSchema['customer'];
        const createJson = {};
        // tslint:disable-next-line: no-string-literal
        createJson['name'] = this.mockData['name'];
        createJson['firstName'] = this.mockData['firstName'];
        createJson['lastName'] = this.mockData['lastName'];
        createJson['email'] = this.mockData['email'];
        createJson['phone'] = this.mockData['phone'];
        createJson['street1'] = '';
        createJson['street2'] = '';
        createJson['postalCode'] = '';
        createJson['city'] = '';
        createJson['country'] = '';
        createJson['language'] = '';
        createJson['gender'] = '';
        createJson['birthday'] = '';
        createJson['jobTitle'] = '';
        console.log(createJson);
        this.setGuestDetails(createJson);
    }


    /* set value of GuestDetails */
    setGuestDetails(data: any) {
        this.guestDetails = data;
    }

    /* get value of GuestDetails */
    getGuestDetails() {
        return this.guestDetails;
    }
}
