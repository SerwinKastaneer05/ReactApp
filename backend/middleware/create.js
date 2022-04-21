const mongoConnect = require("../mongodb")

const createdata = async(req,res)=>{
    let data = await mongoConnect();
    let result = await data.insertOne(req.body)

    res.send("New Student Added Successfully");
    console.log(res);
}

module.exports = {createdata}