import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Invoice } from './model/invoice';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

getInvoices(): Observable<Invoice[]> {
  return this.httpClient.get<Invoice[]>("http://localhost:8081/allInvoices");
}

getInvoice( id: number ): Observable<Invoice> {
  return this.httpClient.get<Invoice>("http://localhost:8081/invoice", 
  { params: new HttpParams().set( "invoiceId" , id ) });
}

}
