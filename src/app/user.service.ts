
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/todos/10';

  SharingData = new Subject();  
  
  isAuthenticate: any;

  constructor(private http: HttpClient, private Router : Router) { }  

  getData(){

    return this.http.get(this.url);

 }

}
