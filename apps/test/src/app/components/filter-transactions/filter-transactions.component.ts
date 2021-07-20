import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClientAccount } from '../../models/client-account';
import { DateRange } from '../../models/date-range';

@Component({
  selector: 'filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTransactionsComponent {
  @Input() dateRangeList: DateRange[] = [];
  @Input() clientsAccounts: ClientAccount[] = [];
  constructor() { }
}
