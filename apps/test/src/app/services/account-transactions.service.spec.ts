import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AccountTransactionsService } from './account-transactions.service';

describe('AccountTransactionsService', () => {
  let service: AccountTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AccountTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
