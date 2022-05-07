export class Item{
    productName: string;
    unitPrice : number;
    quantity : number;
    itemTotalPrice : number;
    itemTotalEuroPrice : number;

    constructor(
        productName?: string,
        unitPrice? : number,
        quantity? : number,
        itemTotalPrice? : number,
        itemTotalEuroPrice? : number)
        
        {
            this.productName = productName;
            this.unitPrice = unitPrice;
            this.quantity = quantity;
            this.itemTotalPrice = itemTotalPrice;
            this.itemTotalEuroPrice = itemTotalEuroPrice;
        }

}