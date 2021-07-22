import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Txn } from '../../models/data';

interface ChartObject {
  name: string;
  value: number;
}

@Component({
  selector: 'transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionGraphComponent {
  colorScheme = {
    domain: ["#00afa0"]
  };

  data = [
    {
      name: "",
      series: [] as ChartObject[]
    }
  ];

  @Input() set transactions(value: Txn[]) {
    this.data = [
      {
        name: "",
        series: this.convertTxnToChartObject(value)
      }
    ];
  }

  convertTxnToChartObject(transactions: Txn[]): ChartObject[] {
    let series: ChartObject[] = [];
    transactions.forEach(e => {
      if (e.date) {
        series.push({ name: e.date.toString().slice(0, 10), value: e.amount } as ChartObject)
      }
    });
    return series;
  }
}