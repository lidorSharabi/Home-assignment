export interface ClientAccount {
  currency?: Currency;
  id: number;
}

export interface Currency {
  name?: string;
  shortCode?: string;
}

export enum TxnType {
  Credit = 1,
  Debit = 2,
  Transfer = 3
}

export interface Txn {
  amount?: number;
  recipient?: string;
  contraAmount?: number;
  contraCurrency?: Currency;
  fxConversionFee?: number;
  fxConversionRate?: number;
  id: number;
  date?: Date;
  netAmount?: number;
  txnType?: TxnType;
  txnFee?: number;
}

export interface AccountData {
  currentBalance: number;
  transactions: Txn[];
}
