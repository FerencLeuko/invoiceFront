import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'customerName', 'issueDate', 'totalPrice'];
  dataSource = null;

  constructor( 
    private invoiceService : InvoiceService,
    private router : Router 
    ) { }

  invoices : Invoice[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(invoices => {
      this.invoices = invoices;
      this.dataSource = new MatTableDataSource(invoices) ;
      this.dataSource.paginator = this.paginator;
    })
  }

  onClick(invoice : Invoice)
  {
    this.router.navigate(["/invoice", invoice.id]);
  }

}
export function newMatPaginatorIntl() {
  let matP =  new MatPaginatorIntl();
  matP.itemsPerPageLabel = "Invoices per page";
  return matP;
}


