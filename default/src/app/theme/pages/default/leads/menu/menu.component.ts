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
        selector: 'app-menu',
        templateUrl: "./menu.component.html",
        styleUrls: ['./menu.component.css']
    })
    export class MenuComponent implements OnInit {


        public sitevisites ;

        ID: string;
        Customer_ID: string;
        Created_Date: string;
        Customer_Name: string;
        Contact_No:string;
        Mode: string;
        Secondary_Source: string;
        Primary_Status:string;
        Secondary_Status:string;

        public totalinq;
        key: string = 'name'; 
        reverse: boolean = false;
    
        // collection = [this.sitevisites];

        
    // @ViewChild(MatSort) sort: MatSort;

    
  

    constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
                element: ElementRef,
                private render: Renderer,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        // this.dataSource.sort = this.sort ;              
        

        this._http.get("https://api.myjson.com/bins/guaew").subscribe(result => { //DevSkim: ignore DS137138 
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

}





























// import { Component, OnInit, ViewChild } from '@angular/core';
// import {SelectionModel} from '@angular/cdk/collections';
// import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
// import { Http } from '@angular/http';

// import { ViewEncapsulation, AfterViewInit, ElementRef, Input, Renderer } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { Router, ActivatedRoute } from '@angular/router';
// import {PageEvent} from '@angular/material';




// export interface PeriodicElement {
//     ID: number;
//     Customer_ID: string;
//     Created_Date: string;
//     Customer_Name: string;
//     Contact_No:string;
//     Mode: string;
//     Secondary_Source: string;
//     Primary_Status:string;
//     Secondary_Status:string;

//   }
  
//   const ELEMENT_DATA: PeriodicElement[] = [
//     {
//         ID: 1,
//         Customer_ID:  "01" ,
//         Created_Date: "16 May, 2018, 11:25",
//         Customer_Name: "Naresh Kumar",
//         Contact_No: "8335081333",
//         Mode: "D",
//         Secondary_Source: "11 Properties",
//         Primary_Status: "Site Visit",
//         Secondary_Status: "Site Visit Done"
//     },
//     {
//         ID: 2,
//         Customer_ID: "02",
//         Created_Date: "15 May, 2018, 12:55",
//         Customer_Name: "Suryakant",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 3,
//         Customer_ID: "03",
//         Created_Date: "15 May, 2018, 12:25",
//         Customer_Name: "Amit Johra",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 4,
//         Customer_ID: "04",
//         Created_Date: "15 May, 2018, 10:25",
//         Customer_Name: "Abid Kumar",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 5,
//         Customer_ID: "05",
//         Created_Date: "11 May, 2018, 11:14",
//         Customer_Name: "Mangesh Ipper",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 6,
//         Customer_ID: "06",
//         Created_Date: "11 May, 2018, 15:17",
//         Customer_Name: "Aryan Jain",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 7,
//         Customer_ID: "07",
//         Created_Date: "10 May, 2018, 15:11",
//         Customer_Name: "Amruta Kadam",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 8,
//         Customer_ID: "08",
//         Created_Date: "10 May, 2018, 14:20",
//         Customer_Name: "Manish Pandey",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 9,
//         Customer_ID: "09",
//         Created_Date: "10 May, 2018, 14:09",
//         Customer_Name: "Tannu Adhikari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 10,
//         Customer_ID: "010",
//         Created_Date: "09 May, 2018, 12:00",
//         Customer_Name: "Sanjana Kumari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 11,
//         Customer_ID: "011",
//         Created_Date: "08 May, 2018, 11:30",
//         Customer_Name: "Siddhart Kaur",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 12,
//         Customer_ID: "012",
//         Created_Date: "08 May, 2018, 11:20",
//         Customer_Name: "Moniac Kumari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 13,
//         Customer_ID: "013",
//         Created_Date: "07 May, 2018, 11:07",
//         Customer_Name: "Irfan Shekh",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 14,
//         Customer_ID: "014",
//         Created_Date: "06 May, 2018, 11:05",
//         Customer_Name: "Prashant Bankar",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 15,
//         Customer_ID: "015",
//         Created_Date: "07 May, 2018, 10:55",
//         Customer_Name: "Mahesh Damara",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 16,
//         Customer_ID: "016",
//         Created_Date: "06 May, 2018, 10:45",
//         Customer_Name: "Nisha Aher",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 17,
//         Customer_ID: "017",
//         Created_Date: "05 May, 2018, 10:30",
//         Customer_Name: "Siddhesh Pande",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 18,
//         Customer_ID: "018",
//         Created_Date: "04 May, 2018, 10:15",
//         Customer_Name: "Pratik Thakre",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 19,
//         Customer_ID: "019",
//         Created_Date: "03 May, 2018, 2:55",
//         Customer_Name: "Joy lakkadwala",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 20,
//         Customer_ID: "020",
//         Created_Date: "03 May, 2018, 12:55",
//         Customer_Name: "Abhishek Nier",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 21,
//         Customer_ID: "021",
//         Created_Date: "02 May, 2018, 12:55",
//         Customer_Name: "Gyri Monterio",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 22,
//         Customer_ID: "022",
//         Created_Date: "01 May, 2018, 12:50",
//         Customer_Name: "Shubham Bhatt",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 23,
//         Customer_ID: "023",
//         Created_Date: "30 Apr, 2018, 12:55",
//         Customer_Name: "Poonam Kendre",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 24,
//         Customer_ID:  "24" ,
//         Created_Date: "16 May, 2018, 11:25",
//         Customer_Name: "Naresh Kumar",
//         Contact_No: "8335081333",
//         Mode: "D",
//         Secondary_Source: "11 Properties",
//         Primary_Status: "Site Visit",
//         Secondary_Status: "Site Visit Done"
//     },
//     {
//         ID: 25,
//         Customer_ID: "25",
//         Created_Date: "15 May, 2018, 12:55",
//         Customer_Name: "Suryakant",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 26,
//         Customer_ID: "26",
//         Created_Date: "15 May, 2018, 12:25",
//         Customer_Name: "Amit Johra",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 27,
//         Customer_ID: "27",
//         Created_Date: "15 May, 2018, 10:25",
//         Customer_Name: "Abid Kumar",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 28,
//         Customer_ID: "28",
//         Created_Date: "11 May, 2018, 11:14",
//         Customer_Name: "Mangesh Ipper",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 29,
//         Customer_ID: "29",
//         Created_Date: "11 May, 2018, 15:17",
//         Customer_Name: "Aryan Jain",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 30,
//         Customer_ID: "30",
//         Created_Date: "10 May, 2018, 15:11",
//         Customer_Name: "Amruta Kadam",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 31,
//         Customer_ID: "31",
//         Created_Date: "10 May, 2018, 14:20",
//         Customer_Name: "Manish Pandey",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 32,
//         Customer_ID: "32",
//         Created_Date: "10 May, 2018, 14:09",
//         Customer_Name: "Tannu Adhikari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 33,
//         Customer_ID: "33",
//         Created_Date: "09 May, 2018, 12:00",
//         Customer_Name: "Sanjana Kumari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 34,
//         Customer_ID: "34",
//         Created_Date: "08 May, 2018, 11:30",
//         Customer_Name: "Siddhart Kaur",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 35,
//         Customer_ID: "35",
//         Created_Date: "08 May, 2018, 11:20",
//         Customer_Name: "Moniac Kumari",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 36,
//         Customer_ID: "36",
//         Created_Date: "07 May, 2018, 11:07",
//         Customer_Name: "Irfan Shekh",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 37,
//         Customer_ID: "37",
//         Created_Date: "06 May, 2018, 11:05",
//         Customer_Name: "Prashant Bankar",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 38,
//         Customer_ID: "38",
//         Created_Date: "07 May, 2018, 10:55",
//         Customer_Name: "Mahesh Damara",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 39,
//         Customer_ID: "39",
//         Created_Date: "06 May, 2018, 10:45",
//         Customer_Name: "Nisha Aher",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 40,
//         Customer_ID: "40",
//         Created_Date: "05 May, 2018, 10:30",
//         Customer_Name: "Siddhesh Pande",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 41,
//         Customer_ID: "41",
//         Created_Date: "04 May, 2018, 10:15",
//         Customer_Name: "Pratik Thakre",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 42,
//         Customer_ID: "42",
//         Created_Date: "03 May, 2018, 2:55",
//         Customer_Name: "Joy lakkadwala",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 43,
//         Customer_ID: "43",
//         Created_Date: "03 May, 2018, 12:55",
//         Customer_Name: "Abhishek Nier",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 44,
//         Customer_ID: "44",
//         Created_Date: "02 May, 2018, 12:55",
//         Customer_Name: "Gyri Monterio",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 45,
//         Customer_ID: "45",
//         Created_Date: "01 May, 2018, 12:50",
//         Customer_Name: "Shubham Bhatt",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//     {
//         ID: 46,
//         Customer_ID: "46",
//         Created_Date: "30 Apr, 2018, 12:55",
//         Customer_Name: "Poonam Kendre",
//         Contact_No: "9836081444",
//         Mode: "I",
//         Secondary_Source: "1st mumbai properties",
//         Primary_Status: "Lost",
//         Secondary_Status: "Out of Budget"
//     },
//   ];
  

// @Component({
//     selector: 'app-menu',
//     templateUrl: "./menu.component.html",
//     styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
// public sitevisites;

// displayedColumns: string[] = ['select', 'ID', 'Customer_ID', 'Created_Date', 'Customer_Name', 'Contact_No', 'Mode', 'Secondary_Source', 'Primary_Status','Secondary_Status'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//   selection = new SelectionModel<PeriodicElement>(true, []);

// length: number;
//   pageSize: number = 3;
//   pageIndex = 0;
//   pageSizeOptions = [3, 5, 10, 12];
//   pageEvent: PageEvent;  
    
//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//     constructor(private _http: HttpClient,                                //DevSkim: ignore DS137138 
//         element: ElementRef,
//         private render: Renderer,
//         private router: Router,
//         private route: ActivatedRoute) { }

//     ngOnInit() {
//         this.dataSource.sort = this.sort;
//         this.dataSource.paginator = this.paginator;
      
//         // this._http.get("https://api.myjson.com/bins/9ixma").subscribe(result => { //DevSkim: ignore DS137138 
//         //     this.sitevisites = result;
//         // });
        
//     }

    // isAllSelected() {
    //     const numSelected = this.selection.selected.length;
    //     const numRows = this.dataSource.data.length;
    //     return numSelected === numRows;
    //   }
    
      
    //   masterToggle() {
    //     this.isAllSelected() ?
    //         this.selection.clear() :
    //         this.dataSource.data.forEach(row => this.selection.select(row));
    //   }

    //   applyFilter(filterValue: string) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //   }
// }











