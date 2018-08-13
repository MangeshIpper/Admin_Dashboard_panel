import { FunfactsComponent } from './funfacts/funfacts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { HttpModule } from '@angular/http';
import { ServicesService } from './services.service';
import { SummaryComponent } from './summary/summary.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ActionChangesComponent } from './action-changes/action-changes.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MenunavComponent } from './menunav/menunav.component';
import { SidebarModule } from 'ng-sidebar';
import { RightbarComponent } from './rightbar/rightbar.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent,
                "children": [
                    {
                        "path": "funfacts",
                        "component": FunfactsComponent
                    },
                    {
                        "path": "summary",
                        "component": SummaryComponent
                    },
                    {
                        "path": "analytics",
                        "component": AnalyticsComponent
                    },
                    {
                        "path": "inventory",
                        "component": InventoryComponent
                    },
                    {
                        "path": "leaderboard",
                        "component": LeaderBoardComponent
                    },
                    {
                        "path": "actionchange",
                        "component": ActionChangesComponent
                    },


                ]
            },

        ]
    },


];
@NgModule({
    imports: [
        SidebarModule.forRoot(),
        CommonModule, RouterModule.forChild(routes), LayoutModule, HttpClientModule, HttpModule,
        //     RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'home', component: IndexComponent },
        // { path: 'summary', component: SummaryComponent },
        //     { path: 'analytics', component: AnalyticsComponent },
        //     { path: 'inventory', component: InventoryComponent },
        //     { path: 'leaderboard', component: LeaderBoardComponent },
        //     { path: 'actionchange', component: ActionChangesComponent },
        // ]),

    ],



    exports: [
        RouterModule,
    ],
    entryComponents: [IndexComponent
    ],

    providers: [ServicesService],


    declarations: [
        IndexComponent,
        SummaryComponent,
        FunfactsComponent,
        AnalyticsComponent,
        InventoryComponent,
        LeaderBoardComponent,
        ActionChangesComponent,
        MenunavComponent,
        RightbarComponent,



    ]
})
export class IndexModule {



}