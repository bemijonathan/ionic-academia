import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthenthicationService {
  constructor(private httpClient: HttpClient) { }

  _get(url: string) {
    return this.httpClient.get(url);
  }
}
