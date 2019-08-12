import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin/admin';
//import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { ContactComponent } from './contact/contact';
import { MinhaContaComponent } from './minha_conta/minha_conta';
import { ProductDetailComponent } from './product_detail/product_detail';
import { ProductsComponent } from './products/products';
import { RegisterComponent } from './register/register';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  //{path:'cart',component:CartComponent},
  {path:'cart',loadChildren:'./cart/cart.module#CartModule'},
  {path:'checkout',component:CheckoutComponent},
  {path:'contact',component:ContactComponent},
  {path:'minha_conta',component:MinhaContaComponent},
  {path:'product_detail',component:ProductDetailComponent},
  {path:'products',component:ProductsComponent},
  {path:'register',component:RegisterComponent},
  {path:'#', redirectTo:''}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
