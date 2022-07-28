import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/a8b906fe-460a-4d8f-bad9-1bd5689d154d';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'token': 'value token'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE.

  create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.apiUrl, user, this.httpOptions);
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.apiUrl);
  }

}
