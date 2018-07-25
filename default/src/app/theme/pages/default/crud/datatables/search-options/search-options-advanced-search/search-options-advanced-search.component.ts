import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: "app-search-options-advanced-search",
    templateUrl: "./search-options-advanced-search.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class SearchOptionsAdvancedSearchComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-search-options-advanced-search',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/demo/default/custom/crud/datatables/search-options/advanced-search.js']);

    }

}