const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();
const PORT = process.env.PORT || 7080;
const Product = require('./models/product.model.js');
const cors = require('cors');
const productRoute = require('./routes/product.route.js');

//^ middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//^ routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello World</h1>")
});



mongoose.connect('mongodb+srv://cng:cng196@backenddb.n20xqbl.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {

    console.log('Connected to Database!');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

})
  .catch(() => {
    console.log('Connection Failed');
});