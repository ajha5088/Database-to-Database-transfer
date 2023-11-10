
const { error } = require('console');
const readline = require('readline');

//Query to filter what data we want
const query = {
    name:"Patient B"
}

async function connectToMongo() {
    const MongoClient = require('mongodb').MongoClient;
    
    const url1 = 'mongodb://localhost:27017/practice';  //Db url from which we want to pass the data
    const url2 = 'mongodb://localhost:27017/practice2'; //Db url where we want to pass the data
  
    const client1 = await MongoClient.connect(url1);
    const client2 = await MongoClient.connect(url2);
  
    const db1 = client1.db();
    const db2 = client2.db();


    console.log("Db1 connected");
    console.log("Db2 connected");

    // console.log(db1);
    // console.log(db2);
    // Perform database operations here

    const data1 = await db1.collection('dummypractice').find(query).toArray();

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
        });
        try{
        rl.question('Do you want to insert data into the database?(y/n):',(answer) =>{
            rl.prompt(`Data we are transferring to client url ,${data1}`)
            if(answer.toLowerCase() === 'y'){
                db2.collection('dummyprac1').insertMany([{data:data1}], function(err, result) {
                    if (err) throw err;
                    console.log(` ${result.ops}`);
                    client1.close();
                    client2.close();
                    rl.close();
                });
                console.log("Data Inserted successfully");
            }else{
                console.log("Insertion Cancelled");
                client1.close();
                client2.close();
                rl.close();
            }
        }) 
        }
        catch(error){
            console.log(error);
        }
    }

  connectToMongo();
