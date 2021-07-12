import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DynamicDllDetailsModel } from '../models/dllDetails';

import {from, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DllAccessorService {

  //#region Member Variables
  private baseUrl:string ='https://localhost:44328';
  private dllDeatilsUrlAppender='/details';
  private executeDllAtBackend='/execute/';
  //#endregion
  constructor(private httpClient:HttpClient) { }

  public getAllDlls(): Observable<DynamicDllDetailsModel[]>
  {
     return this.httpClient.get<DynamicDllDetailsModel[]>(this.baseUrl+this.dllDeatilsUrlAppender);
  }
 

  public executeDll(dllDetails: DynamicDllDetailsModel): Observable<any> 
  {
    return from
    (
      fetch
      (
        this.baseUrl+this.executeDllAtBackend+ dllDetails.dllName,
        {
          body:JSON.stringify(dllDetails),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST', 
          mode: 'no-cors'
        }
      )
      .catch(err => console.log(err))
    );
  }
}
