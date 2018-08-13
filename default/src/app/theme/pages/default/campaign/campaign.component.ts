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
    selector: 'app-campaign',
    templateUrl: "./campaign.component.html",
    styleUrls: ['./campaign.component.css']
})
  

export class campaignComponent implements OnInit {
    ID: number;
    Campaign_Date: string;
    Created_Date: string;
    Status: string;
    Budget:string;
    Spend:string;
    Project:string;
    Lead:string;
    Site_Visit_Done:string;
    Booking_Done:string;
        Mode: string;
    Secondary_Source: string;
    Primary_Status:string;
    Secondary_Status:string;

    public totalinq;
    key: string = 'name'; 
    reverse: boolean = false;

    collection = [
  {
    "ID": "1",
    "Created_Date": "25/12/2018",
    "Campaign_Date": "20/12/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "0",
    "Project": "Corporate Level",
    "Lead": "3",
    "Site_Visit_Done": "0",
    "Booking_Done": "0",
    " Mode": "..."
  },
  {
    "ID": "2",
    "Created_Date": "22/12/2018",
    "Campaign_Date": "19/12/2018",
    "Status": "Active",
    "Budget": "30,00000",
    "Spend": "1",
    "Project": "Corporate Level",
    "Lead": "4",
    "Site_Visit_Done": "1",
    "Booking_Done": "1",
    " Mode": "..."
  },
  {
    "ID": "3",
    "Created_Date": "23/12/2018",
    "Campaign_Date": "18/12/2018",
    "Status": "Active",
    "Budget": "10000",
    "Spend": "2",
    "Project": "Corporate Level",
    "Lead": "6",
    "Site_Visit_Done": "1",
    "Booking_Done": "2",
    " Mode": "..."
  },
  {
    "ID": "4",
    "Created_Date": "21/12/2018",
    "Campaign_Date": "15/12/2018",
    "Status": "Active",
    "Budget": "3500000",
    "Spend": "1",
    "Project": "C Wing WHKensington",
    "Lead": "3",
    "Site_Visit_Done": "1",
    "Booking_Done": "2",
    " Mode": "..."
  },
  {
    "ID": "5",
    "Created_Date": "14/12/2018",
    "Campaign_Date": "11/12/2018",
    "Status": "Active",
    "Budget": "4500000",
    "Spend": "0",
    "Project": "WH Hamiltone",
    "Lead": "12",
    "Site_Visit_Done": "4",
    "Booking_Done": "9",
    " Mode": "..."
  },
  {
    "ID": "6",
    "Created_Date": "10/12/2018",
    "Campaign_Date": "9/12/2018",
    "Status": "Active",
    "Budget": "50,00000",
    "Spend": "0",
    "Project": "WH London",
    "Lead": "6",
    "Site_Visit_Done": "9",
    "Booking_Done": "5",
    " Mode": "..."
  },
  {
    "ID": "7",
    "Created_Date": "09/12/2018",
    "Campaign_Date": "5/12/2018",
    "Status": "Active",
    "Budget": "6512000",
    "Spend": "9",
    "Project": "Dharit Enclave",
    "Lead": "2",
    "Site_Visit_Done": "5",
    "Booking_Done": "6",
    " Mode": "..."
  },
  {
    "ID": "8",
    "Created_Date": "10/11/2018",
    "Campaign_Date": "15/11/2018",
    "Status": "Active",
    "Budget": "65,00000",
    "Spend": "2",
    "Project": "B Wing Hamiltone",
    "Lead": "10",
    "Site_Visit_Done": "1",
    "Booking_Done": "2",
    " Mode": "..."
  },
  {
    "ID": "9",
    "Created_Date": "26/11/2018",
    "Campaign_Date": "28/11/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "0",
    "Project": "Corporate Level",
    "Lead": "3",
    "Site_Visit_Done": "0",
    "Booking_Done": "0",
    " Mode": "..."
  },
  {
    "ID": "10",
    "Created_Date": "5/11/2018",
    "Campaign_Date": "10/11/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "5",
    "Project": "WHKensington",
    "Lead": "3",
    "Site_Visit_Done": "1",
    "Booking_Done": "3",
    " Mode": "..."
  },
  {
    "ID": "11",
    "Created_Date": "25/11/2018",
    "Campaign_Date": "29/11/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "4",
    "Project": "Corporate Level",
    "Lead": "4",
    "Site_Visit_Done": "0",
    "Booking_Done": "8",
    " Mode": "..."
  },
  {
    "ID": "12",
    "Created_Date": "1/11/2018",
    "Campaign_Date": "10/11/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "5",
    "Project": "Corporate Level",
    "Lead": "3",
    "Site_Visit_Done": "4",
    "Booking_Done": "2",
    " Mode": "..."
  },
  {
    "ID": "13",
    "Created_Date": "10/10/2018",
    "Campaign_Date": "20/10/2018",
    "Status": "Active",
    "Budget": "10,00000",
    "Spend": "0",
    "Project": "Corporate Level",
    "Lead": "2",
    "Site_Visit_Done": "1",
    "Booking_Done": "4",
    " Mode": "..."
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
