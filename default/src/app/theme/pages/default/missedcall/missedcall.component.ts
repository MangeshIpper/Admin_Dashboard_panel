import { Component, OnInit,Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Http } from '@angular/http';

import { ViewEncapsulation, AfterViewInit, ElementRef, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { CallsComponent } from './calls/calls.component';

@Component({
    selector: 'app-leads',
    templateUrl: "./missedcall.component.html",
    styleUrls: ['./missedcall.component.css']
})

export class MissedcallComponent implements OnInit {
 
    public sitevisites;

    misscall_date: string;
    customer_name: string;
    Contact_Number: string;
    Project: string;
    Lead_Owners:string;



    public totalinq;
    key: string = 'name'; 
    reverse: boolean = false;

    

constructor(private _http: HttpClient,                                 //DevSkim: ignore DS137138 
            element: ElementRef,
            private render: Renderer,
            private router: Router,
            private route: ActivatedRoute,
            public dialog: MatDialog  ) { }

ngOnInit() {
    // this.dataSource.sort = this.sort ;            
    

    this._http.get("https://api.myjson.com/bins/py7yw").subscribe(result => { //DevSkim: ignore DS137138 
        this.sitevisites = result;
        console.log(this.sitevisites);

        this.totalinq = this.sitevisites.length;
        console.log(this.totalinq);
    });
}

sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  openDialog(){
      console.log("dialog open");
       const dialogRef = this.dialog.open(CallsComponent, {
      width: '500px',
      height: '200px',
    });

    console.log("after dialogbox");
  }



}
