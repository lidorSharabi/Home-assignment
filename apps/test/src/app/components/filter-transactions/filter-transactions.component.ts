import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ClientAccount } from '../../models/data';
import { DateRange } from '../../models/date-range';
import { FilterRequest } from '../../models/filter-request';

@Component({
  selector: 'filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTransactionsComponent implements OnInit {
  clientsAccounts: ClientAccount[] = [];
  dateRanges: DateRange[] = [];
  selectedAccount: ClientAccount | undefined;
  selectedDateRange: DateRange | undefined;
  showCustomDate: boolean = false;
  customDate: any;

  @Output() newFilterRequest: EventEmitter<FilterRequest> = new EventEmitter()

  @Input() useCustomDate: boolean = false;

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

  ngOnInit(): void {
    if (this.useCustomDate){
      this.dateRanges.push({ value: -1, desc: 'custom' });
    }
  }
  filterChanged() {
    if (this.selectedDateRange?.value == -1) {
      this.showCustomDate = true;
    }
    else if (this.selectedAccount?.id) {
      this.showCustomDate = false;
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

  customDateChanged() {
    if (this.selectedAccount?.id && this.customDate!!) {
      let req = {
        id: this.selectedAccount?.id,
        startDate: new Date(this.customDate),
        endDate: new Date()
      } as FilterRequest;
      this.newFilterRequest.emit(req);
    }
  }
}
