import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { PostInvoiceComponent } from './post-invoice/post-invoice.component';

const routes: Routes = [
   { path : "" , component : LoginComponent},
   { path : "home" , component : HomeComponent},
   { path : "invoices" , component : InvoicesComponent},
   { path : "invoice/:id" , component : InvoiceComponent},
   { path : "post-invoice" , component : PostInvoiceComponent},
   { path : "**" , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
