const ProductsModel = require('../model/ProductsModel')

// C= Create
// exports.createProduct =(req,res)=>{
//     let reqBody = req.body;
//     ProductsModel.create(reqBody,(err,data)=>{
//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })
// }

exports.createProduct = async(req,res)=>{
               let reqBody = req.body;
           try {
                 await ProductsModel.create(reqBody)
                 res.status(200).json({status:"success"})
               } catch (error) {
                   res.status(400).json({status:"fail",data:error})
    
                  }
                                 }


// R= Read
    exports.readProduct = async (req,res)=>{
              let Query ={}
              let projection ="ProductName ProductCode ProductImage UnitPrice Qty TotalPrice"
    try {
        
       const data =  await  ProductsModel.find(Query,projection)
               res.status(200).json({status:"success", data:data })
      } catch (error) {
          res.status(400).json({status:"fail",data:error})

         }
                        }

// U= Update
exports.updateProduct =async(req,res)=>{
   let id = req.params.id
   let Query ={_id:id}
   let reqBody = req.body
   try {
   const data= await ProductsModel.updateOne(Query,reqBody)
    res.status(200).json({status:"success",data:data})
  } catch (error) {
      res.status(400).json({status:"fail",data:error})

     }
    
}
// D= Delete
exports.deleteProduct = async(req,res)=>{
    let id = req.params.id
    let Query ={_id:id}
    try {
   const data = await ProductsModel.deleteOne(Query)
         res.status(200).json({status:"success",data:data})
      } catch (error) {
          res.status(400).json({status:"fail",data:error})
     }
   
}