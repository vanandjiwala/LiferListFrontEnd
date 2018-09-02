import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


interface speciesData {
  obj : Object
}

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllSpeciesData(){
    return this.http.get<speciesData>('http://localhost:3000/api/species', this.httpOptions);
  }
}
