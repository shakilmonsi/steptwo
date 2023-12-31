
const express =require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
// require('dotenv').config()

const app = express ()
const cors= require('cors')
const port = process.env.PORT || 5000

// middiewarer 
app.use(cors())
app.use(express.json())

// DB_USER=doctorsProtalsFive-server
// DB_PASS=doctorsProtalsFive-server
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fm710lc.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// dotenv crud mongodb example
 
async function run(){
  try{
const appointmentOptionCollextion = client.db('todoapp').collection('dodoappdata')

app.get('/users', async (req, res) => {
  const query = {};
  const users = await appointmentOptionCollextion.find(query).toArray();
  res.send(users);
});

app.post('/todoapp', async (req, res) => {
    const user = req.body;
    console.log(user);
    const result = await appointmentOptionCollextion.insertOne(user);
    res.send(result);
});





app.get('/dodoappdata', async (req,res)=>{
  const query ={}
  const option = await appointmentOptionCollextion.find(query).toArray();
  
res.send(option)

})
  }
  finally{

  }

}
run().catch(console.log)



///
//  userName:userclasssix
//password: xJRbcfu51v9KBKiW

app.get('/',(req,res)=>{
        res.send('running')
})
app.listen(port,()=>{
        console.log(`running${port}`)
})









