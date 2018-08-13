import { Helpers } from './../../../../../helpers';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followupedt',
  templateUrl: "./followupedt.component.html",
  styleUrls: ['./followupedt.component.css']
})
export class FollowupedtComponent implements OnInit {

  constructor(private _script: ScriptLoaderService,
                  private _http: HttpClient,                                //DevSkim: ignore DS137138 
                  private router: Router,
                  private route: ActivatedRoute) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
      this._script.loadScripts('app-followupedt',
          ['assets/js/tabs.js']);
  }
}
