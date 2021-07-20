import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterTransactionsComponent } from './components/filter-transactions/filter-transactions.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { TransactionGraphComponent } from './components/transaction-graph/transaction-graph.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

@NgModule({
  declarations: [AppComponent, FilterTransactionsComponent, AccountBalanceComponent, TransactionGraphComponent, TransactionTableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
