import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service'
import { CourseComponent } from './course/course.component'
import { DishComponent } from './dish/dish.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CourseComponent,
    DishComponent,
    FooterComponent,
    TopBarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [MenuService,
              CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
