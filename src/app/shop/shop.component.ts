import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']

})
export class ShopComponent {
    public selectedCategory: any = null;
    public productsPerPage = 2;
    public selectedPage = 1;
    public selectedProducts: Product[] = [];

    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository,
        private cart: Cart,
        private router: Router
    ) { }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage
        this.selectedProducts = this.productRepository
            .getProducts(this.selectedCategory)
            
        return this.selectedProducts
            .slice(index, index + this.productsPerPage);
    }
    get pageNumber(): number[] {
        return Array(Math.ceil(this.productRepository
            .getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0)
            .map((x, i) => i + 1);
    }

    changePage(page: number) {
        this.selectedPage = page;
    }



    changePageSize(size: number) {
        this.productsPerPage = size;
    }
    getCategory(category:any){
        this.selectedCategory=category;
    }

}