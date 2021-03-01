import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];
    constructor(private restService: RestService) {
        this.restService
            .getProducts()
            .subscribe(products => this.products = products)
    }
    ngOnInit() {

    }
    getProduct(id: number): Product {
        return this.products.find(i => i.id == id) as Product;
    }
    getProducts(category = null): Product[] {
        if(category)
        return this.products.filter(product => product.category == category);
        else
        return this.products;
    }
    saveProduct(product: Product){
        if(product.id == null || product.id == 0){
            this.restService.addProduct(product)
              .subscribe(product => this.products.push(product))
        }
        else{
            this.restService.updateProduct(product)
             .subscribe(product => {
                 this.products.splice(this.products.findIndex(product => product.id == product.id),1,product)
             })
        }

    }
}
