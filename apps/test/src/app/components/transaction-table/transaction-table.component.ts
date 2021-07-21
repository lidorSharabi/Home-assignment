import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Txn, TxnType } from '../../models/data';

@Component({
  selector: 'transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionTableComponent implements OnInit {
  TxnType = TxnType;
  displayedColumns: string[] = ['id', 'date', 'txnType', 'recipient', 'fxConversionFee', 'txnFee', 'amount', 'netAmount'];

  @Input() transactions: Txn[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  convertToEnumDesc(txnType: TxnType) {
    return TxnType[txnType];
  }
}
