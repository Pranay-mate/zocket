const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose =  require('mongoose');

const campaignRoutes = require('./routes/campaigns.js');
const campaignsListRoutes = require('./routes/campaigns_list.js');
const productsListRoutes = require('./routes/products_list.js');



const Campaign = require('./models/campaigns.js');
const Campaigns_list = require('./models/campaigns_list.js');
const Products_list = require('./models/products_list.js');

const app = express();

app.use(bodyParser.json({limit: '30mb', extends: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extends: true}));
app.use(cors()); 

  
// app.get('/', (req, response) => {
//     response.send("Hello from node server")
// });
app.use('/', campaignRoutes);
app.use('/', campaignsListRoutes);
app.use('/', productsListRoutes);


//auth_sec_code = 9BZx7yD8mvyqCVrY
const uri = "mongodb+srv://Pranay:9BZx7yD8mvyqCVrY@cluster0.npksywp.mongodb.net/?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));

//   mongoose.set('useFindAndModify', false);
