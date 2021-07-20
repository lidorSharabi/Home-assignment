import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientAccount } from '../models/client-account';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionsServiceService {

  // TODO - take urls from config
  baseUrl = 'http://localhost:3333/api/';
  accountsUrl = 'accounts';
  accountInfoUrl = 'accountInfo/';
  constructor(private http: HttpClient) { }

  getClientsAccount(): Observable<ClientAccount[]> {
    let url = this.baseUrl + this.accountsUrl;
    return this.http.get<ClientAccount[]>(url)
      .pipe(
        catchError(this.handleError(url, null))
      );
  }

  getAccountInfo(id: number): Observable<ClientAccount[]> {
    let url = this.baseUrl + this.accountInfoUrl + `${id}`;
    return this.http.get<ClientAccount[]>(url)
      .pipe(
        catchError(this.handleError(url, id))
      );
  }

  handleError(url: string, args: any): any {
    console.error(`http error message: ${url} with args: ${args}`);
  }
}
