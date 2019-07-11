import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dishN:object;
  isCollapsed:boolean=false;
  listOfIngredientsToCart:[];
  
   constructor(
   private route: ActivatedRoute,
   private cartService: CartService
  ) {}
  addToCart(listOfIngredientsToCart){
    window.alert('Your product has been added to the cart!');
     this.cartService.addToCart(listOfIngredientsToCart);
    //console.log(listOfIngredientsToCart)
    
  }

  toggle(){
    this.isCollapsed=!this.isCollapsed;
  }
  ngOnInit() {
    console.log("from dish   :  "+ this.dishN);
  }

}
