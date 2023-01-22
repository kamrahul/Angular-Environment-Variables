import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig:any

  constructor(private _http:HttpClient) { }

   loadConfig() : Observable<any> {
    console.log("Not called")
    return this._http.get<any>("https://jsonplaceholder.typicode.com/todos/1")


  }
  
  getConfig(){
    return this.appConfig;
  }

  setConfig(response:any){
    console.log("Response set")
    return this.appConfig = response;
  }
}
