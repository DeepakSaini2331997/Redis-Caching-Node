export const getProductsdata =()=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                products:[
                    {
                        "id":1,
                        "name":'ABC Product',
                        "price":5233
                    },
                    {
                        "id":2,
                        "name":'XYZ Product',
                        "price":5232
                    },
                    {
                        "id":3,
                        "name":'BBC Product',
                        "price":5230
                    }
                ]
            })
        },2000)
    })
