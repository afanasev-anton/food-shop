import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
{path: "cars", component: HomeComponent},
{path: "contact", component: ContactComponent},
{path: "", component: ProductListComponent},
{path: 'items/:itemId', component: ItemsDetailComponent},
{path: "cart", component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
