import productModel from "../model/product.model.js"

// GET /products
export async function getProducts(req,res){
    try{
        const products=await productModel.find()
        res.status(200).json(products)
    }
    catch(err){
        res.send(500).json({msg:"Error while fetching products"});
    }
}

// GET /products/:id
export async function getProductById(req,res){
    
    try{
        const product=await productModel.findById(req.params.id)
        if (!product) return res.status(404).json({ msg: "Product not found" }); 
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({msg:"Error while fetching products"});
    }

}

//store the product data
export async function postProductData(req,res){
    
    try{
        const {name,price,description,stock}=req.body
        
        
        const product=await productModel.create({name,price,description,stock})
        
        return res.status(201).json(product)
    }
    catch(err){
        res.status(500).json({msg:"Error while creating products"});
    }

}



