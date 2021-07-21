import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AccountData } from '../../models/data';

@Component({
  selector: 'account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBalanceComponent implements OnInit {
  currentBalance: number | undefined;
  accumulateAmountTransactions: number = 0;

  @Input() set accountData(value: AccountData) {
    this.currentBalance = value.currentBalance;
    this.accumulateAmountTransactions = 0;
    value.transactions.forEach(e => this.accumulateAmountTransactions += e.amount? e.amount: 0)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
