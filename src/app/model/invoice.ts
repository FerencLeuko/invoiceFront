import { Item } from "./item";

export class Invoice {
    id : number;
    customerName : string;
    issueDate : Date;
    dueDate : Date;
    totalPrice : number;
    totalEuroPrice : number;
    comment : string;
    items : Item[];
  
    constructor(
        id? : number, 
        customerName? : string,  
        issueDate? : Date, 
        dueDate? : Date, 
        totalPrice? : number, 
        totalEuroPrice? : number, 
        comment? : string,  
        items? : Item[] )

        {
        this.id = id;
        this.customerName = customerName;
        this.issueDate = issueDate;
        this.dueDate = dueDate;
        this.totalPrice = totalPrice;
        this.totalEuroPrice = totalEuroPrice;
        this.comment = comment;
        this.items = items;
        }
  
  }