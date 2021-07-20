import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
