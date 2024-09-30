import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://hub.dummyapis.com';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private http = inject(HttpClient)
  constructor() { }
  getPosts(){
    return this.http.get(`${BASE_URL}/employee?noofRecords=10&idStarts=1`);
  }
}
