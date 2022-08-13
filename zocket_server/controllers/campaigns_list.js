const Campaigns_list = require('../models/campaigns_list.js');
const mongoose = require('mongoose');

module.exports.getCampaignsList = async (req, res)=>{
    const { id } = req.params;
    // console.log(req.params)
    try {
        const campaigns_list = await Campaigns_list.find();
        console.log(campaigns_list)
        // const campaigns = await Campaign.find({_id : "62f3daadb847e6e68f9142cf"});
        // console.log("campaigns")
        res.status(200).json(campaigns_list);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}