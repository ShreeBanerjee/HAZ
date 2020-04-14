import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private router: Router) { }

    /* Common Navigate Function */
    navigateModule(url: string) {
        this.router.navigate([url]);
    }
}
