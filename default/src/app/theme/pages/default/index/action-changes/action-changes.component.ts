import { Http } from '@angular/http';

import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-action-changes',
    templateUrl: "./action-changes.component.html",
    styleUrls: ['./action-changes.component.css']
})
export class ActionChangesComponent implements OnInit {

    public sitevisites;

    constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
        private render: Renderer) { }

    ngOnInit() {

        this._http.get("https://api.myjson.com/bins/1c3gci").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;

            console.log(this.sitevisites);
        });
    }
    refresh() {
        console.log("You just click refresh button");
        this._http.get("https://api.myjson.com/bins/1c3gci").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;
        });
    }

}
