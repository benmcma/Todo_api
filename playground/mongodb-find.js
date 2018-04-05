
const MongoClient =require("mongodb").MongoClient; 

const ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    
    if(err)
    {
        console.log("unable to connect to mongoDDB server");
    }
    console.log("connected to mongoDB server");

    const db =client.db("TodoApp"); 
    /*
    db.collection("Todos").find().toArray().then((docs)=>{
        //then is when things go fine, and err is when things fail
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("unable to fetch data", err);
    });*/
     //we want to fetch Todos (all of it) .find() find the collections but in pointer, .toArray() will 
                                            //return a promise, so we can use then()

    /*
    db.collection("Todos").find({completed:false}).toArray().then((docs)=>{
        //if we want to find specific collections , for example here completed:false 
        
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("unable to fetch data", err);
    });
    */
    /*
   db.collection("Todos").find({_id: new ObjectID("5ac68723043bd005900acc1f")}).toArray().then((docs)=>{ //we have to get the ObjectID on the top

    //if we want to find specific collections , for example _id
    
    console.log("Todos");
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("unable to fetch data", err);
    });
    */


    /*
   db.collection("users").find({name:"Johny"}).toArray().then((docs)=>{ //we want to find from users, name:"Johny"

    //if we want to find specific collections , for example _id
    
    console.log("users");
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("unable to fetch data", err);
    });
    */
    
   db.collection("Todos").find().count().then((count)=>{ //we can get the documentations by: node.js mongoDb driver api /cursor
                                                            //we are looking at find() and count()
    //this is counting number of collections
    console.log(`Todos count : ${count}`); 
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("unable to fetch data", err);
    });
    
   // client.close(); 

});  

//to run :node playground/mongodb-find.js
//on robomongo clcik users/right click on the objectid, and choose expand recursively
