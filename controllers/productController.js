import {getProductsdata} from "../api/products.js"
import {redis} from "../redis.js"
const getProducts = async(req,res)=>{
    const getProductsCache = await redis.get("products")
    //console.log(getProductsCache," cache result")
    if(getProductsCache){
        return res.status(200).json({
            success:true,
            products:JSON.parse(getProductsCache)
        })
    }

    const result = await getProductsdata()
    const saveProducts = await redis.set("products",JSON.stringify(result.products))

    //console.log(saveProducts," my saveProducts");
    res.status(200).json({
        success:true,
        products:result.products
    })
}

const getProductDetails = async(req,res)=>{
    const id = req.params.id
    //console.log(id," my idsss")
    let productDetails = await redis.get(`product:${id}`)
    if(productDetails){
        return res.status(200).json({
            success:true,
            products:JSON.parse(productDetails)
        })
    }

    const result= await getProductsdata()
    productDetails = result.products.filter(data => {
        if (data.id == id) {
            return {
                id:data.id,
                name: data.name,
                price: data.price,
            }
        }
    })
    if(productDetails.length>0){
        const saveProducts = await redis.set(`product:${id}`,JSON.stringify(productDetails))
        //console.log(saveProducts," save produt++++")
        return res.status(200).json({
            success:true,
            products:productDetails
        })
    }
    return res.status(400).json({
        success:false,
        products:[]
    })
    //console.log(productDetails," my products deatils")

}

export {
    getProducts,
    getProductDetails
}