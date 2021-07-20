import { TestBed } from '@angular/core/testing';

import { AccountTransactionsServiceService } from './account-transactions-service.service';

describe('AccountTransactionsServiceService', () => {
  let service: AccountTransactionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountTransactionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
