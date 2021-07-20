import { Component, OnInit } from '@angular/core';
import { ClientAccount } from './models/client-account';
import { DateRange } from './models/date-range';
import { AccountTransactionsService } from './services/account-transactions.service';

@Component({
  selector: 'test-npx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clientsAccounts: ClientAccount[] = [];
  dateRangeList: DateRange[] = [
    { value: 7, desc: '7 days' },
    { value: 14, desc: '14 days' },
    { value: 30, desc: '30 days' },
    { value: 60, desc: '60 days' },
    { value: 90, desc: '90 days' }
    // TODO - add custom date
  ]

  constructor(private accountTransactionsService: AccountTransactionsService) { }

  ngOnInit(): void {
    this.accountTransactionsService.getClientsAccount().subscribe(response =>
      this.clientsAccounts = response
    );
  }


}

