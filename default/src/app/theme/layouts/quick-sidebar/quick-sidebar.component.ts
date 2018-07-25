import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';


@Component({
    selector: "app-quick-sidebar",
    templateUrl: "./quick-sidebar.component.html",
    styleUrls: ['./quick-sidebar.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class QuickSidebarComponent implements OnInit {


    event: string[] = [];

    constructor() {

    }
    ngOnInit() {

    }


    getstatus() {
        this.event.push('Start from Shire');
    }

    getstatus1() {
        this.event.push('Kill some Orcs');
    }

    getstatus2() {
        this.event.push('Throw that goddamn ring in the lava');
    }


}