import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = "https://swapi.co/api/people/?format=json";
    return this.http.get<any>(url);
  }
}
