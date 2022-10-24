import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http:HttpClient) { }
  gettodaydate(){
    let date=new Date();
    return date
  }
  getmyname(){
    return'shahed';
  }
  getallusers():Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
  }

}
