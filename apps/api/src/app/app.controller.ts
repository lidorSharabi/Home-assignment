import { Controller, Get, Param, Query } from '@nestjs/common';

import { AccountData, ClientAccount } from '@test-npx/api-interfaces';
import { accounts, accountsData } from './data';

@Controller()
export class AppController {
  @Get('accounts')
  getAccounts() {
    return accounts;
  }

  @Get('accountInfo/:id')
  getAccountData(
    @Param('id') clientAccountId: ClientAccount['id'],
    @Query('fromDate') fromDate: Date,
    @Query('toDate') toDate: Date
  ): AccountData {
    const parseFromDate = new Date(fromDate);
    const parseToDate = new Date(toDate);

    return !fromDate
      ? accountsData[clientAccountId]
      : {
          ...accountsData[clientAccountId],
          transactions: accountsData[clientAccountId].transactions.filter(
            (txn) => {
              return (
                txn.date.getTime() >= parseFromDate.getTime() &&
                txn.date.getTime() <= parseToDate.getTime()
              );
            }
          ),
        };
  }
}
