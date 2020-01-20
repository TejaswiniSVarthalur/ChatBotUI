import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http : HttpClient) { }

  getDataFromAPI(formData){    
   return this.http.post("https://btwpn99eld.execute-api.ap-southeast-1.amazonaws.com/default/wit_booking",formData)
  }
}
