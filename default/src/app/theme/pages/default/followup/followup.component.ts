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
    selector: 'app-followup',
    templateUrl: "./followup.component.html",
    styleUrls: ['./followup.component.css']
})

export class FollowupComponent implements OnInit {

    ID: number;
    Created_Date: string;
    Customer_Name: string;
    Contact_No:string;
    Primary_Status:string;
    Secondary_Status:string;
    Project:string;
    Follow_Up_Type:string;
    Follow_Up_Date:string;
    Lead_Owner:string;
    Last_Updated_Date:string;
    Updated_By:string;
    Action:string;

    public totalinq;
    key: string = 'name';
    reverse: boolean = false;

    collection = [
        {
            "ID": "1",
            "Created_Date": "25/12/2018",
            "Customer_Name": "NAREDCO RAJESH RASAL",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak",
            "Follow_Up_Type": "Telephonic",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "2",
            "Created_Date": "25/12/2018",
            "Customer_Name": "Rajesh Kamble",
            "Contact_No": "9920499963",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak Residency",
            "Follow_Up_Type": "Peronal Visit",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Prashant Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "pranav yadhav",
            " Action": "..."
        },
        {
            "ID": "3",
            "Created_Date": "25/12/2018",
            "Customer_Name": "mohan maru",
            "Contact_No": "9004411201",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Unnathi Woods",
            "Follow_Up_Type": "Peronal visit",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "4",
            "Created_Date": "25/12/2018",
            "Customer_Name": "Silassoloman S",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak City 4",
            "Follow_Up_Type": "Personal Visit",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Jimit Shah",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "5",
            "Created_Date": "25/12/2018",
            "Customer_Name": "Mr. Rajesh Bag",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak Residency 2",
            "Follow_Up_Type": "Direct",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "	Swati Nikam",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "6",
            "Created_Date": "25/12/2018",
            "Customer_Name": "NAREDCO RAJESH RASAL",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak",
            "Follow_Up_Type": "Telephonic",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "7",
            "Created_Date": "25/12/2018",
            "Customer_Name": "NAREDCO RAJESH RASAL",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak",
            "Follow_Up_Type": "Telephonic",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "8",
            "Created_Date": "25/12/2018",
            "Customer_Name": "NAREDCO RAJESH RASAL",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak",
            "Follow_Up_Type": "Telephonic",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
        },
        {
            "ID": "9",
            "Created_Date": "25/12/2018",
            "Customer_Name": "NAREDCO RAJESH RASAL",
            "Contact_No": "9619779222",
            "Primary_Status": "Site Visit",
            "Secondary_Status": "Site Visit Planned",
            "Project": "Raunak",
            "Follow_Up_Type": "Telephonic",
            "Follow_Up_Date": "15/12/2018",
            "Lead_Owner": "Neeta Kurhade",
            "Last_Updated_Date": "26/9/2017",
            "Updated_By": "Sangita yadhav",
            " Action": "..."
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
