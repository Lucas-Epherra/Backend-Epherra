const ProductManager = require("./Class/app");
const producto = new ProductManager();

producto.addProduct({
    title:"Producto 1",
    description:"Producto numero uno",
    price:200,
    thumbnail:"sin imagen",
    code:"ab11",
    stock:55,
});

producto.addProduct({
    title:"Producto 2",
    description:"Producto numero dos",
    price:500,
    thumbnail:"sin imagen2",
    code:"ac22",
    stock:95,
});

console.log(producto.getProducts());

producto.addProduct({
    title:"Producto De Prueba",
    description:"Producto numero tres",
    price:800,
    thumbnail:"sin imagen3",
    code:"aq77",
    stock:155,
});

producto.getProductById(2);
console.log(producto.getProductById(2));