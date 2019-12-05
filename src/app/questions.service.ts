import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class QuestionsService {
  constructor(private httpClient: HttpClient) { }
  _post(url, data){
    return this.httpClient.post(url, data)
  }

  _get():any{
    return this.httpClient.get('http://localhost:3000/questions/2001?email=bemijonathan@gmail.com&course=ANAhttp://localhost:3000/questions/2001?email=bemijonathan@gmail.com&course=ANA')
  }

  questions: any[]
}