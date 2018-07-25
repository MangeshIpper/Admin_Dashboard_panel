import { Http } from '@angular/http';

import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-inventory',
    templateUrl: "./inventory.component.html",
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


    public sitevisites;


    constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
        private render: Renderer) { }

    ngOnInit() {

        this._http.get("https://api.myjson.com/bins/avb1y").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;

            console.log(this.sitevisites);
        });
    }

    nilcheck() {
        console.log("Welcome to nil building");

        this._http.get("https://api.myjson.com/bins/1frsba").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;

            console.log(this.sitevisites);
        });
    }

    anantwarclick() {
        console.log("welcome to Anantwar");

        this._http.get("https://api.myjson.com/bins/8fn6u").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;

            console.log(this.sitevisites);
        });
    }
    detail_floor() {
        console.log("You are in the details section");
    }
}
