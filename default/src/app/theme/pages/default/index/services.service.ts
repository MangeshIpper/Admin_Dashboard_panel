import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ServicesService {

    constructor(private http: HttpClient) { //DevSkim: ignore DS137138 

    }

    // private url: string = "apidata/sitevisite.json" //DevSkim: ignore DS137138 

    // private url : string = "http://my-json-server.typicode.com/MangeshIpper/jsondemo/db" //DevSkim: ignore DS137138 


    getsitevisite() {
        return this.http.get("http://my-json-server.typicode.com/MangeshIpper/jsondemo/db?start_date=18-06-2018&end_date=") //DevSkim: ignore DS137138 
            .map((response: Response) => response.json());
    }
}