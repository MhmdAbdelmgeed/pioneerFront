import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://localhost:7184/api/TransactionProcess';

  constructor(private http: HttpClient) { }

  getTransactions(goodId: number, startDate: string, endDate: string): Observable<any[]> {
    const url = `${this.apiUrl}/GetTransactions/${goodId}/${startDate}/${endDate}`;
    return this.http.get<any[]>(url);
  }

  getSummary(goodId: number, startDate: string, endDate: string): Observable<any> {
    const url = `${this.apiUrl}/GetSummary/${goodId}/${startDate}/${endDate}`;
    return this.http.get<any>(url);
  }
}
