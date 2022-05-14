import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/invoice.service';
import { Invoice } from 'src/app/model/invoice';
import { DialogData } from '../confirm-data';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  invoice : Invoice;
  displayedColumns: string[] = ['productName', 'quantity', 'unitPrice'];
  dataSource = null;

  constructor( @Inject( MAT_DIALOG_DATA ) public data: DialogData,
  private invoiceService : InvoiceService,
  private router : Router,
  public dialogRef : MatDialogRef<ConfirmDialogComponent> ) { }

  ngOnInit(): void {
    this.invoice = this.data.invoice;
    this.dataSource = new MatTableDataSource( this.invoice.items ) ;
  }

  postInvoice(){
    this.invoiceService.postInvoice(this.invoice).subscribe( response => 
    { this.dialogRef.close();
    this.router.navigate(["/invoice", response.id ])}
    );

}


}
