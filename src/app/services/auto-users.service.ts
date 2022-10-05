import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoUsersService {
  constructor(private http: HttpClient) { }

  public getPeopleWithCars(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/8bf0acfa-7fd8-468e-0478-08daa4a8d995`);
  }
}
