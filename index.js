const ProductManager = require("./Class/app");

const product = new ProductManager();


product.addProduct({
    title:"Producto 1",
    description:"Producto numero uno",
    price:200,
    thumbnail:"sin imagen",
    code:11,
    stock:55,
});


product.addProduct({
    title:"Producto 2",
    description:"Producto numero dos",
    price:500,
    thumbnail:"sin imagen2",
    code:5,
    stock:95,
});

product.addProduct({
    title:"Producto De Prueba",
    description:"Producto numero tres",
    price:800,
    thumbnail:"sin imagen3",
    code:15,
    stock:155,
});

console.log(product.getProducts());

product.getProductById(2);

console.log(product.getProductById(2));
