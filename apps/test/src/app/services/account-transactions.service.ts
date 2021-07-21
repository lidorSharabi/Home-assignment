import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountData, ClientAccount } from '../models/data';
import { catchError, map, tap } from 'rxjs/operators';
import { Header } from '@nestjs/common';
import { FilterRequest } from '../models/filter-request';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionsService {
  // TODO - take urls from config
  // TODO - create http service for all httpRequest calls
  baseUrl = '/api/';
  accountsUrl = 'accounts';
  accountInfoUrl = 'accountInfo/';
  constructor(private http: HttpClient) { }

  getClientsAccount(): Observable<ClientAccount[]> {
    let url = this.baseUrl + this.accountsUrl;
    return this.http.get<ClientAccount[]>(url, { withCredentials: true })
      // .pipe(
      //   catchError(this.handleError(url, null))
      // );
  }

  getAccountInfo(accountId: number, startDate: string, endDate: string): Observable<AccountData> {
    let url = this.baseUrl + this.accountInfoUrl + `${accountId}?fromDate=${startDate}&toDate=${endDate}`;
    return this.http.get<AccountData>(url, { withCredentials: true, headers: {'Access-Control-Allow-Origin': '*'}})
      // .pipe(
      //   catchError(this.handleError(url, id))
      // );
  }

  // handleError(url: string, args: any): any {
  //   console.error(`http error message: ${url} with args: ${args}`);
  // }
}
