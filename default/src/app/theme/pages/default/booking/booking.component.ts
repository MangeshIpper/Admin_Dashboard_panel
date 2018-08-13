import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Http } from '@angular/http';

import { ViewEncapsulation, AfterViewInit, ElementRef, Input, Renderer } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'app-booking',
    templateUrl: "./booking.component.html",
    styleUrls: ['./booking.component.css']
})

export class bookinComponent implements OnInit {
 
    ID: number;
    Enquiry_ID: string;
    Created_Date: string;
    Customer_Name: string;
    Contact_No:string;
    Project:string;
    Building:string;
    Flat_No:string;
    Status:string;
    Booking_Date:string;
    Created_By: string;
    Last_Up_Date: string;

    public totalinq;
    key: string = 'name'; 
    reverse: boolean = false;

    collection = [
        {
            "ID": "1",
            "Enquiry_ID": "14233",
            "Created_Date": "25/12/2018",
            "Customer_Name": "Mr. Bhim Kumar",
            "Contact_No": "9890763704",
            "Project": "Raunak Heights",
            "Building": "H2",
            "Flat_No": "902",
            "Status":"Booked",
            "Booking_Date": "18/2/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "22/3/2018",
        },
        {
            "ID": "2",
            "Enquiry_ID": "12975",
            "Created_Date": "20/12/2018",
            "Customer_Name": "Nishath Narayanan",
            "Contact_No": "8879813204",
            "Project": "Raunak Heights",
            "Building": "H3",
            "Flat_No": "912",
            "Status":"Tentative",
            "Booking_Date": "11/3/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "2/3/2018",
        },
        {
            "ID": "3",
            "Enquiry_ID": "14233",
            "Created_Date": "25/12/2018",
            "Customer_Name": "Mr. Bhim Kumar",
            "Contact_No": "9890763704",
            "Project": "Raunak Heights",
            "Building": "H2",
            "Flat_No": "902",
            "Status":"Booked",
            "Booking_Date": "18/3/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "22/2/2018",
        },
        {
            "ID": "4",
            "Enquiry_ID": "19293",
            "Created_Date": "2/12/2018",
            "Customer_Name": "Arvind Sahu",
            "Contact_No": "9819129605",
            "Project": "Raunak Heights",
            "Building": "H2",
            "Flat_No": "114",
            "Status":"Booked",
            "Booking_Date": "6/1/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "8/3/2018",
        },
        {
            "ID": "5",
            "Enquiry_ID": "465463",
            "Created_Date": "1/12/2018",
            "Customer_Name": "Bhim Kumar",
            "Contact_No": "8890763704",
            "Project": "Raunak Heights",
            "Building": "H2",
            "Flat_No": "122",
            "Status":"Booked",
            "Booking_Date": "18/1/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "22/3/2018",
        },
        {
            "ID": "6",
            "Enquiry_ID": "14233",
            "Created_Date": "21/12/2018",
            "Customer_Name": "Bhim Kumar",
            "Contact_No": "9890763704",
            "Project": "Raunak Heights",
            "Building": "H2",
            "Flat_No": "902",
            "Status":"Booked",
            "Booking_Date": "18/3/2018",
            "Created_By": "Neeta Kurhade",
            "Last_Up_Date": "22/3/2018",

        }
    ];

constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
            element: ElementRef,
            private render: Renderer,
            private router: Router,
            private route: ActivatedRoute) { }

ngOnInit() {
    // this.dataSource.sort = this.sort ;              
    this.totalinq = this.collection.length;
    console.log(this.totalinq);
}

sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
