const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors()); 

app.get('/', (req,res)=> {
    res.send('omg the server is now live, on new folder')
});

app.get('/test', (req,res)=> {
    res.send('TEST PAGE')   
})


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`listening on port: ${port}`))