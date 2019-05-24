import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SimBox } from '../navigation/SimBox';

@Injectable({
  providedIn: 'root'
})
export class SimBoxListService {

  constructor(private http: HttpClient, private router:Router) { }


  simboxlist() {
    if (localStorage.getItem("authtoken")==null) {
      this.router.navigate(['/#/login']);
    }else {
      console.log("Getting device list");
    }
  
  }

  getSimBoxsList() {
    return this.http.get(`${environment.apiUrl}/SimboxList`)
                .toPromise()
                .then(res => <SimBox[]> res)
                .then(data => { 
                  console.log(data);
                  return data; });
}





}
