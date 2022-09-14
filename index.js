const express= require("express")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")
let model=require("./cartModel")
const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Shreya1998:1234.qwer@cluster0.gzlyp.mongodb.net/Shreya1998?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use("/cart",async(req,res)=>{
    let data=await model.find()
    let sum=0
    for(let i=0;i<data.length;i++){
        sum+=data[i].product_price

    }
    console.log(sum)
    return res.send({sum:sum})

})
app.use("/change",async(req,res)=>{
    let data=await model.updateMany({},{$set:{product_price:0}})
    return res.send({sum:0})
})



app.listen(process.env.PORT || 6000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 6000))
});
