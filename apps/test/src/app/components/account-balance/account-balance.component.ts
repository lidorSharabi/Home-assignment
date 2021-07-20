import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
