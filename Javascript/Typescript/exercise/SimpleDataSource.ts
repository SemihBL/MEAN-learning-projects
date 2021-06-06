import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "A", "A", 1000),
            new Product(2, "B", "B", 1000),
            new Product(3, "C", "C", 1000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }

}
