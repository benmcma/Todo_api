//we want to do object deconstruction here, we add //2 and //3 

const MongoClient =require("mongodb").MongoClient; //1


const ObjectID = require('mongodb').ObjectID;//2
var obj = new ObjectID();//3
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    
    if(err)
    {
        console.log("unable to connect to mongoDDB server");
    }
    console.log("connected to mongoDB server");

    const db =client.db("TodoApp"); //to get datbase reference

    
    db.collection("Todos").insertOne({
        text:"to do something",
        completed:false
    }, (err, result)=>{ //second is err nd result
        if(err)
        {
            return console.log("unable to insert todo", err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); 
        console.log(JSON.stringify(result.ops[0]._id)); 
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp())); 
     

    }); 

    client.close(); 

});  
