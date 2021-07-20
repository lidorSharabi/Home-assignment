import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
