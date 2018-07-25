import { Http } from '@angular/http';

import { Component, OnInit, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-leader-board',
    templateUrl: "./leader-board.component.html",
    styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

    public sitevisites;

    constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
        private render: Renderer) { }

    ngOnInit() {
        this._http.get("https://api.myjson.com/bins/1cjj4m").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;

            console.log(this.sitevisites);
        });
    }

}
