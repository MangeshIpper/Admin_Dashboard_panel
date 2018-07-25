import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: "app-data-sources-ajax-server-side",
    templateUrl: "./data-sources-ajax-server-side.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DataSourcesAjaxServerSideComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-data-sources-ajax-server-side',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/demo/default/custom/crud/datatables/data-sources/ajax-server-side.js']);

    }

}