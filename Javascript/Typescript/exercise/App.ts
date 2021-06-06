import { Product } from './Product';
import { ProductService } from './ProductService';

let _productService = new ProductService();

let result;

result = _productService.getById(1);

let newP = new Product();

newP.name = 'iphone';
newP.category = 'phone';
newP.price = 10;

// _productService.saveProduct(newP);
_productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result); 