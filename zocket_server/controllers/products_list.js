
const Products_list = require('../models/products_list.js');
const mongoose = require('mongoose');

module.exports.getProductsList = async (req, res)=>{
    const { id } = req.params;
    // console.log(req.params)
    try {
        const products_list = await Products_list.find();
        console.log(products_list)
        // const campaigns = await Campaign.find({_id : "62f3daadb847e6e68f9142cf"});
        // console.log("campaigns")
        res.status(200).json(products_list);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}