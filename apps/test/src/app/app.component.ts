import { Component, OnInit } from '@angular/core';
import { AccountData, ClientAccount } from './models/data';
import { DateRange } from './models/date-range';
import { FilterRequest } from './models/filter-request';
import { AccountTransactionsService } from './services/account-transactions.service';

@Component({
  selector: 'test-npx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clientsAccountsList: ClientAccount[] = [];
  accountData!: AccountData;

  dateRangeList: DateRange[] = [
    { value: 7, desc: '7 days' },
    { value: 30, desc: '30 days' },
    { value: 60, desc: '60 days' },
    { value: 90, desc: '90 days' }
    // TODO - add custom date
  ]

  constructor(private accountTransactionsService: AccountTransactionsService) { }

  ngOnInit(): void {
    this.accountTransactionsService.getClientsAccount().subscribe(response =>
      this.clientsAccountsList = response
    );
  }

  newFilterRequest(req: FilterRequest) {
    let startDateStr = this.customDateFormat(req.startDate);
    let endDateStr = this.customDateFormat(req.endDate);
    this.accountTransactionsService.getAccountInfo(req.id, startDateStr, endDateStr).subscribe(response =>
      this.accountData = response
    );
  }

  customDateFormat(date: Date) {
    return date.toISOString().slice(0, 10);
  }
}

