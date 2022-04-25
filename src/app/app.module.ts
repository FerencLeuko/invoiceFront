import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InvoicesComponent, newMatPaginatorIntl } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PostInvoiceComponent } from './post-invoice/post-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvoicesComponent,
    InvoiceComponent,
    PostInvoiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [ { provide :  MatPaginatorIntl, useValue : newMatPaginatorIntl() } ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

