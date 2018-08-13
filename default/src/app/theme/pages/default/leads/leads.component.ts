import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuickCallComponent } from './quick-call/quick-call.component';


@Component({
    selector: 'app-leads',
    templateUrl: "./leads.component.html",
    styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

    constructor(public dialog: MatDialog,
      private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
    }

openDialog(){
     const dialogRef = this.dialog.open(QuickCallComponent, {
      width: '500px',
      height: '150px',

    //   data: {animal: 'panda' }
    });
}

}
