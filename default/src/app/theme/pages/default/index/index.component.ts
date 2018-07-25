import { Http } from '@angular/http';

import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, Input, Renderer } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

    @ViewChild("m_dashboard_daterangepicker") elementdatepicker;



    public sitevisites;

    public dateresult;

    public startdate;





    constructor(private _script: ScriptLoaderService,
        private _http: HttpClient,                                //DevSkim: ignore DS137138 
        private services: ServicesService,
        element: ElementRef,
        private render: Renderer,
        private router: Router,
        private route: ActivatedRoute) {


    }
    ngOnInit() {

        // this.services.getsitevisite()
        // .subscribe(sitevisitedata => this.sitevisites = sitevisitedata);
        let date = new Date();
        this.dateresult = date;

        this._http.get("https://api.myjson.com/bins/15nxge").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;
        });

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);
    }


    todayfunction() {

        this.dateresult = null;
        this.startdate = null;

        let date = new Date();
        this.dateresult = date;


        this._http.get("https://api.myjson.com/bins/15nxge").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;


        });
    }

    yesterdayfunction() {

        this.dateresult = null;
        this.startdate = null;

        let date = new Date();
        let result = date.setDate(date.getDate() - 1);
        this.dateresult = result.toString();
        this._http.get("https://api.myjson.com/bins/129z0u").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;
        });
    }

    lastsevendays() {

        this.dateresult = null;
        this.startdate = null;

        let date = new Date();
        this.startdate = date;
        console.log(this.startdate);


        let date1 = new Date();
        let result = date1.setDate(date1.getDate() - 6);
        this.dateresult = result.toString();
        console.log(this.dateresult);

        this._http.get("https://api.myjson.com/bins/vw9qe").subscribe(result => {
            this.sitevisites = result;
        });

        // this.startdat.=null;
    }
    lastthirtydays() {

        this.dateresult = null;
        this.startdate = null;

        let date = new Date();
        this.startdate = date;

        let date1 = new Date();
        let result = date1.setDate(date1.getDate() - 29);
        this.dateresult = result.toString();

        this._http.get("https://api.myjson.com/bins/kj3sm").subscribe(result => {
            this.sitevisites = result;
        });

    }
    thismonth() {
        this.dateresult = null;
        this.startdate = null;

        let date = new Date();
        this.startdate = date;

        let date1 = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        // var result = (firstDay.getDate()) + '/' + (firstDay.getMonth() + 1) + '/' + firstDay.getFullYear();
        // this.dateresult = result.toString();

        this.dateresult = firstDay;

        this._http.get("https://api.myjson.com/bins/19pqom").subscribe(result => {
            this.sitevisites = result;
        });

    }
    lastmonth() {

        this.dateresult = null;
        this.startdate = null;


        var date = new Date();
        var lastDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        this.dateresult = lastDay;

        let date1 = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 0);
        this.startdate = firstDay;


        this._http.get("https://api.myjson.com/bins/z22ye").subscribe(result => {
            this.sitevisites = result;
        });

    }
    customrange() {



        this._http.get("https://api.myjson.com/bins/z22ye").subscribe(result => {
            this.sitevisites = result;

        });

    }

















    // summary(){
    //     this.router.navigate(['/summary']);
    // }

    // inventory(){
    //     console.log("req get");
    //     this.router.navigateByUrl('/inventory');
    // }





















}
