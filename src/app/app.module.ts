import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin';
import { CartModule } from './cart/cart.module';
import { CheckoutComponent } from './checkout/checkout';
import { ContactComponent } from './contact/contact';
import { MinhaContaComponent } from './minha_conta/minha_conta';
import { ProductDetailComponent } from './product_detail/product_detail';
import { ProductsComponent } from './products/products';
import { RegisterComponent } from './register/register';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CheckoutComponent,
    ContactComponent,
    MinhaContaComponent,
    ProductDetailComponent,
    ProductsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
