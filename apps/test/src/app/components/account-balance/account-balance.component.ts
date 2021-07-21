import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { AccountData } from '../../models/data';

@Component({
  selector: 'account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBalanceComponent {
  currentBalance: number | undefined;
  accumulateAmountTransactions: number = 0;

  @Input() set accountData(value: AccountData) {
    if (value!!) {
      this.currentBalance = value.currentBalance;
      this.accumulateAmountTransactions = 0;
      value.transactions.forEach(e => this.accumulateAmountTransactions += e.amount ? e.amount : 0)
    }
  }
}
