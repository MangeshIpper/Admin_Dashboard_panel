import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ServicesService } from './theme/pages/default/index/services.service';
import { SidebarModule } from 'ng-sidebar'; 
import { SidebarComponent } from './theme/layouts/sidebar/sidebar.component';



import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import {MatSnackBarModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';





@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        SidebarComponent,
        

    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule, HttpModule,
        SidebarModule.forRoot(), FormsModule, ReactiveFormsModule,  HttpClientModule, MatIconModule, MatTableModule, MatPaginatorModule, MatMenuModule,
    NoopAnimationsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatButtonModule, MatGridListModule, MatToolbarModule,MatCheckboxModule,
    MatCardModule, MatSortModule, MatProgressSpinnerModule, MatTabsModule,MatStepperModule,CommonModule,
        
        // RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'home', component: IndexComponent },
        //     { path: 'summary', component: SummaryComponent },
        //     { path: 'analytics', component: AnalyticsComponent },
        //     { path: 'inventory', component: InventoryComponent },
        //     { path: 'leaderboard', component: LeaderBoardComponent },
        //     { path: 'actionchange', component: ActionChangesComponent },
        // ]),

    ],
    providers: [ScriptLoaderService, ServicesService],
    bootstrap: [AppComponent],
    exports: [BrowserModule, BrowserAnimationsModule, CommonModule]
})
export class AppModule { }