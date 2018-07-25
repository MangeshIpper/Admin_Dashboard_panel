// import { InventoryComponent } from './theme/pages/default/inventory/inventory.component';
// import { ActionChangesComponent } from './theme/pages/default/action-changes/action-changes.component';
// import { Component } from '@angular/core';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from "./auth/logout/logout.component";
// import { AnalyticsComponent } from './theme/pages/default/analytics/analytics.component';
// import { LeaderBoardComponent } from './theme/pages/default/leader-board/leader-board.component';


const routes: Routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    // { path: 'analytics', component: AnalyticsComponent },
    // { path: 'actionchange', component: ActionChangesComponent },
    // { path: 'summary', component: SummaryComponent },
    // { path: 'inventory', component: InventoryComponent },
    // { path: 'leaderboard', component: LeaderBoardComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }