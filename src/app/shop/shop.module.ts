import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
    declarations:[ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule], //shop modülünün içinde bir component oluşturduğumuz için bu component de web tarayıcısı içinde çalışacağı için BrowserModule' ü ekledik buraya.
    exports:[ShopComponent, CartDetailComponent, CheckoutComponent] // içerisinde bir component varsa göndericeğimiz modülün exports yazıyoruz.
})
export class ShopModule {}