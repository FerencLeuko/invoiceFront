import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'quantity', 'unitPrice', 'itemTotalPrice','itemTotalEuroPrice'];
  dataSource = null;

  invoice : Invoice;

  constructor( private route : ActivatedRoute,
    private invoiceService : InvoiceService ) {  }

  ngOnInit(): void {
      let id = this.route.snapshot.params["id"];

      this.invoiceService.getInvoice(id).subscribe( invoice =>
         { 
           this.invoice = invoice 
           this.dataSource = new MatTableDataSource( invoice.items ) ;
         })      
  }

  

}
