import { getProductById, getProducts, postProductData } from "../controller/product.controller.js"



export function productRoute(app){
    //Fetch all products
    app.get("/api/products",getProducts)

    //Fetch product by id
    app.get("/api/products/:id",getProductById)

    //store product data
    app.post("/api/product",postProductData)
}
