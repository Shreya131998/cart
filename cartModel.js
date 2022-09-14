const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({


    product_name:{type:String,required:true},
    product_price:{type:Number,required:true},
    
    product_id:{type:String,required:true}
})
module.exports=mongoose.model("carts_details",cartSchema)