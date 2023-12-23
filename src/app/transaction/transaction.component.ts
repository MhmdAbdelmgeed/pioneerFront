import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  goodId: number = 0;
  startDate: string = '';
  endDate: string = '';
  transactions: any;
  summary: any;

  constructor(private transactionService: TransactionService) {}

  getTransactions() {
    this.transactionService
      .getTransactions(this.goodId, this.startDate, this.endDate)
      .subscribe((data) => {
        this.transactions = data;
      });
  }

  getSummary() {
    this.transactionService
      .getSummary(this.goodId, this.startDate, this.endDate)
      .subscribe((data) => {
        this.summary = data;
      });
  }
}
