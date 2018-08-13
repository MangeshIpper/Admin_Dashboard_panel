import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Http } from '@angular/http';

import { ViewEncapsulation, AfterViewInit, ElementRef, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';
import {ScriptLoaderService} from "../../../../_services/script-loader.service";

@Component({
    selector: 'app-report',
    templateUrl: "./report.component.html",
    styleUrls: ['./report.component.css'],
    encapsulation: ViewEncapsulation.None,

})

export class ReportComponent implements OnInit {

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-report',
            ['assets/js/report.js']);

    }
    selectedUserTab = 1;
    tabs = [
        {
            name: 'Detail Lead report',
            key: 1,
            active: false
        },
        {
            name: 'Touch Point Report',
            key: 2,
            active: false
        },
        {
            name: 'Project wise Report',
            key: 3,
            active: false
        },
        {
            name: 'Pending Follow up Report',
            key: 4,
            active: false
        },
        {
            name: 'Source Medium Wise Report',
            key: 5,
            active: false
        },
        {
            name: 'Site Visit Report',
            key: 6,
            active: false
        },
        {
            name: 'Failure Ananlysis Report',
            key: 7,
            active: false
        },
        {
            name: 'Site Visit confirm List',
            key: 8,
            active: false
        },
        {
            name: 'Campaign Report',
            key: 9,
            active: false
        },
        {
            name: 'Call Report ',
            key: 10,
            active: false
        },
        {
            name: 'Missed Call Report',
            key: 11,
            active: false
        },
        {
            name: 'Booking Report',
            key: 12,
            active: false
        }
    ];

    tabChange(selectedTab) {
        console.log('### tab change');
        this.selectedUserTab = selectedTab.key;
        for (let tab of this.tabs) {
            if (tab.key === selectedTab.key) {
                tab.active = true;
            } else {
                tab.active = false;
            }
        }
    }
}
