import { Injectable } from '@angular/core';
import { HttpHeader } from '../constants/app.constant';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  /*********************Properties*********************/
  protected get options() {
    const headers = {};
    headers['Accept'] = 'application/json';
    headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,PATCH,DELETE';
    headers['Allow'] = 'GET,PUT,POST,PATCH,DELETE';
    headers['Cache-Control'] = 'no-cache, no-store';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = 'Sat, 01 Jan 2000 00:00:00 GMT';
    headers[HttpHeader.ContentType] = 'application/json';

       return {
      headers: headers
    };
  }


}



