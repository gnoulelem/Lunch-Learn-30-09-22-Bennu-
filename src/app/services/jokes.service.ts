import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  constructor(private http: HttpClient) {}

  getJokes(): Observable<any> {
    return this.http.get<any>('https://api.chucknorris.io/jokes/random');
  }
}
