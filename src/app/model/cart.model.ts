import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable()
export class Cart {
    public cartItems: CartItem[] = []; 
    public totalProductCount: number = 0;
    public totalPrice: number = 0;
    public totalCartItem: number = 0;

    addCartItem(product: Product, quantity: number = 1){
        let cartItem = this.cartItems.find(cartItem =>cartItem.product.id === product.id)
        if(cartItem != undefined){
            cartItem.quantity += quantity;
        }
        else{
            this.cartItems.push(new CartItem(product, quantity))
        }
        this.calculate();
    }
    calculate(){
        this.totalProductCount=0;
        this.totalPrice=0;
        this.cartItems.forEach(cartItem =>{ 
            this.totalProductCount += cartItem.quantity;
            this.totalPrice += (cartItem.product.price as number * cartItem.quantity)
        } )

    }
    calculateCartItem(cartItem: CartItem ){
        return cartItem.product.price as number * cartItem.quantity as number;
        
    }

    removeCartItem(id: any){
        let index = this.cartItems.findIndex(cartItem => cartItem.product.id === id );
        this.cartItems.splice(index,1);
        this.calculate();

    }
    clearCartItems(){
        this.cartItems = [];
        this.totalProductCount = 0;
        this.totalPrice = 0;
    }
    updateQuantity(product: any, quantity: any){
        let cartItem = this.cartItems.find(cartItem =>cartItem.product.id === product.id)
         if(cartItem != undefined){
             cartItem.quantity  = quantity;
         }
         this.calculate();

    }
}

export class CartItem{ //ürün objesinin ve ürün sayısının oluşturuğu objeye de cartItem ismini verdim.
    constructor(
        public product: Product,
        public quantity: number){  }
} 