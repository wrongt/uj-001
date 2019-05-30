import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { mno } from '../Mno/mno';


@Injectable({
  providedIn: 'root'
})
export class MNOService {

  constructor(private http: HttpClient, private router:Router) { }

  getMnosList() {
    return this.http.get(`${environment.apiUrl}/MNO`)
                .toPromise()
                .then(res => <mno[]> res)
                .then(data => { 
                  
                  return data; });
}
}
