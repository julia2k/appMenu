import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {
    this.items=this.cartService.getItems();
   }

  addIng(ingr){
    if(ingr.length>0){
      if(this.cartService.isUniq(ingr)){
        this.items.push({
        "ingridient": ingr,
          "quantity":1
        })
      }else{
        this.cartService.addQuantity(ingr);
      }
    }
  }

  deleteIngr(x){
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].ingridient==x.ingridient){
        this.items.splice(i, 1);
      }
    }
     
  }
  addQuantity(){
     
  }
  ngOnInit() {
  }

}
