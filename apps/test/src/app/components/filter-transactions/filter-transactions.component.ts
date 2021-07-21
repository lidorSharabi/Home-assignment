import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientAccount } from '../../models/data';
import { DateRange } from '../../models/date-range';
import { FilterRequest } from '../../models/filter-request';

@Component({
  selector: 'filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTransactionsComponent {
  clientsAccounts: ClientAccount[] = [];
  dateRanges: DateRange[] = [];
  selectedAccount: ClientAccount | undefined;
  selectedDateRange: DateRange | undefined;

  @Output() newFilterRequest: EventEmitter<FilterRequest> = new EventEmitter()

  @Input() set dateRangeList(value: DateRange[]) {
    this.dateRanges = value;
    this.selectedDateRange = this.dateRanges[0];
    this.filterChanged();
  }

  @Input() set clientsAccountsList(value: ClientAccount[]) {
    this.clientsAccounts = value;
    this.selectedAccount = this.clientsAccounts[0];
    this.filterChanged();
  }

  filterChanged() {
    if (this.selectedAccount?.id && this.selectedDateRange?.value) {
      let req = {
        id: this.selectedAccount?.id,
        startDate: this.calculateStartDate(),
        endDate: new Date()
      } as FilterRequest;
      this.newFilterRequest.emit(req);
    }
  }

  calculateStartDate() {
    const days = this.selectedDateRange?.value != undefined ? this.selectedDateRange?.value : 0;
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    return startDate;
  }
}
