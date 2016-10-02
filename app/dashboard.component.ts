import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit {

    constructor(
        private router: Router) {
    }




    ngOnInit(): void {

    }



}

