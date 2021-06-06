// Storage Controller
const StorageController = (function () {
    // Private


    // Public
    return {
        storeProcuct: function (prd) {
            let products;

            if (localStorage.getItem('products') === null) {
                products = [];
                products.push(prd);

            } else {
                products = JSON.parse(localStorage.getItem('products'));
                products.push(prd);

            }
            localStorage.setItem('products', JSON.stringify(products));

        },
        getProducts: function () {
            let products;
            if (localStorage.getItem('products') === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        },
        updateProduct: function (prd) {
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((product, index) => {

                if (prd.id == product.id) {
                    products.splice(index, 1, prd);
                }

            });

            localStorage.setItem('products', JSON.stringify(products));
        },
        deleteProduct: function (id) {
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((product, index) => {

                if (id == product.id) {
                    products.splice(index, 1);
                }

            });

            localStorage.setItem('products', JSON.stringify(products));
        }
    }
})();

// Product Controller
const ProductController = (function () {

    // Private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice: 0
    }

    // Public
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        getProductById: function (id) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            });

            return product;
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },
        getCurrentProduct: function () {
            return data.selectedProduct;
        },
        addProduct: function (name, price) {
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        updateProduct: function (name, price) {
            let product = null;

            data.products.forEach(element => {
                if (element.id == data.selectedProduct.id) {
                    element.name = name;
                    element.price = parseFloat(price);
                    product = element;

                }
            });

            return product;
        },
        deleteProduct: function (product) {
            data.products.forEach((prd, index) => {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });
        },
        getTotal: function () {
            let total = 0;
            data.products.forEach(element => {
                total += element.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        }
    }

})();

// UI Controller
const UIController = (function () {
    // Private
    const Selectors = {
        productList: "#item-list",
        productListItems: "#item-list tr",
        addBtn: ".addBtn",
        updateBtn: ".updateBtn",
        deleteBtn: ".deleteBtn",
        cancelBtn: ".cancelBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalDollar: "#total-d",
        totalTL: "#total-tl",
    }

    // Public
    return {
        createProductList: function (products) {
            let html = ``
            products.forEach(element => {
                html += `
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.price} $</td>
                        <td class="text-right">
                            <i class="far fa-edit editBtn btn btn-warning btn-sm"></i>
                        </td>
                    </tr>
                `
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors;
        },
        addProduct: function (prd) {
            document.querySelector(Selectors.productCard).style.display = "block";

            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit editBtn btn btn-warning btn-sm"></i>
                    </td>
                </tr>
            `;


            document.querySelector(Selectors.productList).innerHTML += item;
        },
        deleteProduct: function () {
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(element => {
                if (element.classList.contains('bg-primary')) {
                    element.remove();
                }
            });
        },
        updateProduct: function (prd) {
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(element => {
                if (element.classList.contains('bg-primary')) {
                    element.children[1].textContent = prd.name;
                    element.children[2].textContent = prd.price + ' $';
                    updatedItem = element;
                }
            });

            return updatedItem;
        },
        clearInputs: function () {
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        clearWarnings: function () {
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(element => {
                if (element.classList.contains('bg-primary')) {
                    element.classList.remove('bg-primary');
                }

            });
        },
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal: function (total) {
            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 7, 6;
        },
        addProductToForm: function () {
            const selectedProduct = ProductController.getCurrentProduct();

            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        addState: function () {

            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.addBtn).style.display = 'inline';
            document.querySelector(Selectors.updateBtn).style.display = 'none';
            document.querySelector(Selectors.deleteBtn).style.display = 'none';
            document.querySelector(Selectors.cancelBtn).style.display = 'none';
        },
        editState: function (tr) {
            const parent = tr.parentNode;

            tr.classList.add('bg-primary');
            document.querySelector(Selectors.addBtn).style.display = 'none';
            document.querySelector(Selectors.updateBtn).style.display = 'inline';
            document.querySelector(Selectors.deleteBtn).style.display = 'inline';
            document.querySelector(Selectors.cancelBtn).style.display = 'inline';
        },

    }

})();

// App Controller
const App = (function (ProductCtrl, UICtrl, StorageCtrl) {
    const UISelectors = UIController.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // Add product event
        document.querySelector(UISelectors.addBtn).addEventListener('click', function (e) {
            const productName = document.querySelector(UISelectors.productName).value;
            const productPrice = document.querySelector(UISelectors.productPrice).value;

            try {
                if (productName == '' || productPrice == '')
                    throw "Fill the blanks"

                if (isNaN(productPrice))
                    throw "Enter valid a data"


                // Add Product
                const newProduct = ProductCtrl.addProduct(productName, productPrice);

                // Add Product to List
                UIController.addProduct(newProduct);

                // Add Product to LS
                StorageCtrl.storeProcuct(newProduct);

                // Get Total
                const total = ProductCtrl.getTotal();

                // Show Total
                UICtrl.showTotal(total);

                // Clear
                UIController.clearInputs();

            } catch (error) {
                alert(error);
            }

            e.preventDefault();
        });

        // Edit product event
        document.querySelector(UISelectors.productList).addEventListener('click', function (e) {

            if (e.target.classList.contains('editBtn')) {
                const id = (e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

                // Get selected product
                const product = ProductCtrl.getProductById(id);

                // Set current product
                ProductCtrl.setCurrentProduct(product);

                UICtrl.clearWarnings();

                // Add product to inputs
                UICtrl.addProductToForm();

                UICtrl.editState(e.target.parentNode.parentNode);
            }

            e.preventDefault();
        });

        // Save product event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', function (e) {

            const productName = document.querySelector(UISelectors.productName).value;
            const productPrice = document.querySelector(UISelectors.productPrice).value;

            try {
                if (productName == '' || productPrice == '')
                    throw "Fill the blanks"

                if (isNaN(productPrice))
                    throw "Enter valid a data"

                // Update Product
                const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

                // Update UI
                let item = UICtrl.updateProduct(updatedProduct);

                // Update LS
                StorageCtrl.updateProduct(updatedProduct);

                // Get Total
                const total = ProductCtrl.getTotal();

                // Show Total
                UICtrl.showTotal(total);

                UICtrl.addState();

            } catch (error) {
                alert(error);
            }

            e.preventDefault();
        });

        // Cancel edit product event
        document.querySelector(UISelectors.cancelBtn).addEventListener('click', function (e) {

            UICtrl.addState();
            UICtrl.clearWarnings();

            e.preventDefault();
        });

        // Delete product event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', function (e) {

            // Get selected product
            const selectedProduct = ProductCtrl.getCurrentProduct();

            // Delete product
            ProductCtrl.deleteProduct(selectedProduct);

            // Delete product from UI
            UICtrl.deleteProduct();

            // Delete product from LS
            StorageCtrl.deleteProduct(selectedProduct.id);

            // Get Total
            const total = ProductCtrl.getTotal();

            // Show Total
            UICtrl.showTotal(total);

            UICtrl.addState();

            if (total == 0) {
                UICtrl.hideCard();
            }

            e.preventDefault();
        });
    }

    // Public
    return {
        init: function () {
            console.log('App Starting...');
            UICtrl.addState();
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();

            } else {

                UICtrl.createProductList(products);
            }

            // Load Event Listeners
            loadEventListeners();
        }
    }

})(ProductController, UIController, StorageController);

App.init();