import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
