import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-analytics',
    templateUrl: "./analytics.component.html",
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

    private toggle: boolean = false;

    _opened: boolean = false;




    public sitevisites;

    constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
        element: ElementRef,
        private render: Renderer,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {

        this._http.get("https://api.myjson.com/bins/jtn24").subscribe(result => { //DevSkim: ignore DS137138 
            this.sitevisites = result;
            console.log(this.sitevisites);
        });
    }


    filterslider(event) {
        console.log("welcome");

    }
    filtersidebar() {
        console.log("welcome to sidebar");
        this.toggle != this.toggle;
    }
    _toggleSidebar() {
        this._opened = !this._opened;
        // this.router.navigate(['/index/'])
    }

}
