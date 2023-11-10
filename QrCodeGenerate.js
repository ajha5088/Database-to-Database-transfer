const qrCode = require("qrcode");
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/practice';
// const options = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(url);
console.log("starting mongodb server");

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db("practice");
//     const collection = db.collection('dummy');
//     collection.insertOne({name:"Saasas"})
//     // the following code examples can be pasted here...
    
//     return 'done.';
//     }
    
//     main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());




    async function openAdminDbConnectionForSaas() {
    const dbConnection = await MongoClient.connect(url);
    console.log("Connected to the database")
        return dbConnection;
    }

    const data = openAdminDbConnectionForSaas();
    const pushDataInCOllection = data.practice.insertOne({name:"Aditya"})
    console.log(pushDataInCOllection);


// try{
// MongoClient.connect(url, options, (err, client) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log('Connected to MongoDB database!');
//     const db = client.db('practice');
//     // perform database operations here
//     const myCollection = db.collection('dummypractice');
//     myCollection.insertOne({ name: 'John Doe', age: 30 }, (err, result) => {
//       if (err) {
//         console.error(err);
//       }
//       console.log('Inserted document into collection!');
//       client.close();
//     });
//   });
// }catch(err){
//     console.log(`Error found ${err}`)
// }
  

qrCode.toFile('qrCode.png', 'https://www.example.com', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('QR code saved as qrCode.png');
});