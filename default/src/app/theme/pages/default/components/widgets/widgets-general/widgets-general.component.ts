import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
    selector: "app-widgets-general",
    templateUrl: "./widgets-general.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class WidgetsGeneralComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-widgets-general',
            ['assets/app/js/dashboard.js']);

    }

}