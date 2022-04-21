const {MongoClient} = require("mongodb");
const url = "mongodb+srv://newuser:newuser@cluster0.gnilp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database = "myFirstDatabase"
const client = new MongoClient(url);

async function mongoConnect(){
    const result = await client.connect();
    db = result.db(database);
    return db.collection("qnas");
}

module.exports = mongoConnect;