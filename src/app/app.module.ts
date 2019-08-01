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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CourseComponent,
    DishComponent,
    FooterComponent,
    TopBarComponent,
    CartComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: 'signup', component: SignUpComponent },
    ])
  ],
  providers: [MenuService,
              CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
