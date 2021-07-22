import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountData, ClientAccount } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionsService {
  accountsUrl = '/api/accounts';
  accountInfoUrl = '/api/accountInfo/';
  constructor(private http: HttpClient) { }

  getClientsAccount(): Observable<ClientAccount[]> {
    return this.http.get<ClientAccount[]>(this.accountsUrl, { withCredentials: true });
  }

  getAccountInfo(accountId: number, startDate: string, endDate: string): Observable<AccountData> {
    let url = this.accountInfoUrl + `${accountId}?fromDate=${startDate}&toDate=${endDate}`;
    return this.http.get<AccountData>(url, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*' } });
  }
}
