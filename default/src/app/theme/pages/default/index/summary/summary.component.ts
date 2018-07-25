import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-summary',
    templateUrl: "./summary.component.html",
    styleUrls: ['./summary.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class SummaryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
