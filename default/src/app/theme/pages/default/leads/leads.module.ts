import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { LeadsComponent } from './leads.component';
import { MenuComponent } from './menu/menu.component';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { QuickCallComponent } from './quick-call/quick-call.component';
import { QuickLeadComponent } from './quick-lead/quick-lead.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';







const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LeadsComponent,
                "children": [
                    {
                        "path": "lead/add",
                        "component": AddLeadsComponent
                    },
                    {
                        "path": "lead/qcall",
                        "component": QuickCallComponent
                    },
                    {
                        "path": "lead/qcall",
                        "component": QuickCallComponent
                    },
                    {
                        "path": "lead/qlead",
                        "component": QuickLeadComponent
                    }
                ]
            },

        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule,MatStepperModule,MatFormFieldModule, MatInputModule,
       MatButtonModule, MatCheckboxModule,MatGridListModule





    ], exports: [
        RouterModule
    ], declarations: [
        LeadsComponent,
        MenuComponent,
        AddLeadsComponent,
        QuickCallComponent,
        QuickLeadComponent
    ]
})
export class LeadsModule { }