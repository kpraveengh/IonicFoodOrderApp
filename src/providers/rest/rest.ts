import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/Rx";


@Injectable()
export class RestProvider {

  public handleError;
  public headers;
  api_data:any;
  outlet_data:any;
  apiurl = 'http://localhost/rest_multichain/testapi';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  headersFunc() {
    this.headers = new HttpHeaders({
      'API-Access-Token': 'testapi_key',
    "Content-Type": "application/json",
    });
    }

    public getLoginData(data): Observable<any> {
      this.headersFunc();
      const options = {headers: this.headers };      
      const url = this.apiurl;
      return this.http.post(url+'/login', data, options).timeout(15000).map((response: Response) => {
        this.api_data=response;
        console.log(response)
        return this.api_data;
      })
      }

      public getAllStoresData(data): Observable<any>{

        this.headersFunc();

        const options={headers:this.headers};
        const url=this.apiurl;
        return this.http.post(url+'/login', data, options).timeout(15000).map((response:Response)=>{
          this.api_data=response;
          return this.api_data;
        })



      }


      public getStoreData(data):Observable<any>{
        this.headersFunc();
        const options = {headers: this.headers };      
        const url = this.apiurl+'/outlet_data';
        return this.http.post(url, data, options).timeout(15000).map((response: Response) => {
          this.api_data=response;
          // console.log('asa',this.api_data);
          return this.api_data;
        })
      }

      public postapidata(data): Observable<any> {
        this.headersFunc();
        const options = {headers: this.headers };      
        const url = this.apiurl;
        return this.http.post(url+'/postapidata', data, options).timeout(15000).map((response: Response) => {
          this.api_data=response;
          return this.api_data;
        })
        }

        public getJSON(): Observable<any> {
          return this.http.get("./assets/information.json")
      }
    

}



