import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface mySpeciesData {
  obj : Object
}

@Injectable({
  providedIn: 'root'
})
export class MySpeciesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getMySpeciesData(){
    return this.http.get<mySpeciesData>('http://localhost:3000/api/getAllLifers',this.httpOptions);
  }
}
