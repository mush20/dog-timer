import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private _url = 'https://dog.ceo/api/breeds/image/random';

  constructor(protected http: HttpClient) {
  }

  getDog(): Observable<Object> {
    return this.http.get(this._url);
  }
}
