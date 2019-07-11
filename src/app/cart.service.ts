import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService { 
  items:{"ingridient":string,
            "quantity":number}[]=[];

  isUniq(ingr:string): boolean{
    let counter=0;
    if(this.items.length>0){
      for(let item of this.items){
        if(ingr !== item.ingridient){  
          counter++;
        } 
      }
      if( counter ==this.items.length){
        return true;
      }else {
        return false;
      }
    }else{
      return true
    }
  }

  addQuantity(ingr){
    for(let item of this.items){
      if(ingr == item.ingridient){
        item.quantity++;
      }
    }
  }

  addToCart(listOfingr) {
    for(let ingr of listOfingr){
      if(this.isUniq(ingr)==true){
        this.items.push({
          "ingridient": ingr,
          "quantity": 1
        });
      }else{
        this.addQuantity(ingr);
      }
    }
    console.log(this.items);
  }

    // addToCart(listOfingr) {
    //   for(let ingr of listOfingr){
    //    let counter=0;
    //     if(this.items.length>0){
    //      for(let item of this.items){
    //        if(ingr == item.ingridient){
    //          item.quantity++;
    //        } else{
    //          counter++;
    //        }
    //        if(counter==this.items.length){
    //         this.items.push({
    //           "ingridient": ingr,
    //           "quantity": 0
    //        });
    //        }
    //      }
    //     }else{
    //         this.items.push({
    //           "ingridient": ingr,
    //           "quantity": 1
    //        });
    //     }
    //   }
    //   console.log(this.items)
    // }

      getItems() {
        return this.items;
      }
      setItems(items){
        this.items=items;
        console.log('new items recieved')
        console.log(this.items);
      }
    

  constructor() { }
}
