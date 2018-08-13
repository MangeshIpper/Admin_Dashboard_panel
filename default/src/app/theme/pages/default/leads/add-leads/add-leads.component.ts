import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {ScriptLoaderService} from "./../../../../../_services/script-loader.service";

@Component({
    selector: 'app-add-leads',
    templateUrl: "./add-leads.component.html",
    styleUrls: ['./add-leads.component.css']
})
export class AddLeadsComponent implements OnInit {
  
  toppings = new FormControl();
  toppings1 = new FormControl();
    isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
   fourthFormGroup:FormGroup;
   fifthFormGroup: FormGroup;
    constructor(private _formBuilder: FormBuilder,
                private _script: ScriptLoaderService,) { }

    ngOnInit() {
                 this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: ['', Validators.required]
            });
            this.thirdFormGroup = this._formBuilder.group({
              thirdCtrl: ['', Validators.required]
            });
            this.fourthFormGroup = this._formBuilder.group({
              fourthCtrl: ['', Validators.required]
            });
            this.fifthFormGroup = this._formBuilder.group({
              fifthCtrl: ['', Validators.required]
            });
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-add-leads',
            ['assets/js/tabs.js']);
    }

    Onfileselect(event){
  
        console.log(event);

    }


}
