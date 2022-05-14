const hotel = require('../models/hotels')
const mongoose = require("mongoose");


const getHotels = async (req, res) => {
    try {
        const data = await hotel.find()
        console.log();
         console.log({data});
        return res.status(200).send(data)  //[]
    } catch (error) {
        return res.status(500).send({error: error})
    }

}

const addHotels = async (req, res)  => {
    const { hotelId, name, location, description } = req.body;
    const newHotels = new hotel(
        {
            hotelId,
            name,
            location,
            description
        }
    );


    try{
        await newHotels.save();
        res.status(201).json(newHotels);

    }catch(error){
        res.status(409).json({ message: error.message});
    }

}
 const updateHotels = async (req, res) => {

   // console.log(req);

    const { id } = req.query;
    const {hotelId, name, location, description} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedHotels = {hotelId, name, location, description, _id: id};

    await hotel.findByIdAndUpdate(id, updatedHotels, { new: true });

    res.json(updatedHotels);
}

const deleteHotels = async (req, res) => {
    const { id } = req.query;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);


    const result = await hotel.findById(id);
    await hotel.remove(result);


    res.json({ message: "Post deleted successfully." });
}

module.exports = {
    getHotels,
    addHotels,
    updateHotels,
    deleteHotels

}

