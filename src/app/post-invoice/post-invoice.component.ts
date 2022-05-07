import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../model/invoice';
import { Item } from '../model/item';

@Component({
  selector: 'app-post-invoice',
  templateUrl: './post-invoice.component.html',
  styleUrls: ['./post-invoice.component.css']
})
export class PostInvoiceComponent implements OnInit {

  newInvoice : Invoice = new Invoice();

  newItem : Item;

  items : Item[] = [];

  @ViewChild("form")
  form : NgForm;

  constructor( private invoiceService: InvoiceService) { }

  ngOnInit(): void {    
  }

  createItem(){
    this.form.form.value["items"]= this.items;
    this.items.push( new Item() );
  }

  createInvoice(){
    this.form.form.value["items"]= this.items;
    this.newInvoice.customerName = this.form.form.value["customerName"];
    this.newInvoice.issueDate = this.form.form.value["issueDate"];
    this.newInvoice.dueDate = this.form.form.value["dueDate"];
    this.newInvoice.comment = this.form.form.value["comment"];
    this.newInvoice.items = this.items;
    this.postInvoice();
  }

  postInvoice(){
    this.invoiceService.postInvoice(this.newInvoice).subscribe(response => console.log(response));
  }

}
