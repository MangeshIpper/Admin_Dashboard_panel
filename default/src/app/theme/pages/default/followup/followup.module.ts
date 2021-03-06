import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import {FollowupComponent} from "./followup.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { FollowupedtComponent } from './followupedt/followupedt.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": FollowupComponent,
                "children": [
                    {
                        "path": "followupedt",
                        "component": FollowupedtComponent,
                    },
                ]
            },

        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule,MatStepperModule,MatFormFieldModule, MatInputModule,
       MatButtonModule, MatCheckboxModule,MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatPaginatorModule,
       MatSortModule, MatCardModule,MatTableModule, MatDialogModule, MatMenuModule, NgxPaginationModule, Ng2SearchPipeModule,  Ng2OrderModule






    ],
     exports: [
        RouterModule
    ],
     declarations: [
         FollowupComponent,
         FollowupedtComponent
     ]  
})
export class FollowupModule { }