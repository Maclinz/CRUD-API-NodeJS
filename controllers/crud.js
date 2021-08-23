const CrudSchema = require('../models/crud');


const getAllData = async (req, res) => {
    try {
        const crud = await CrudSchema.find({});
        res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const createData = async (req, res) => {
    try {
        const crud = await CrudSchema.create(req.body);
        res.status(201).json({crud});
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const getOneItem = async (req, res) => {
    try {
        const {itemID:crudId} = req.params;
        const crud = await CrudSchema.findOne({_id:crudId});

        if(!crud){
            return res.status(404).json({message: 'Item does not Exist !!!'})
        }

    res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const updateData = async (req, res) => {
    try {
        const {itemID:crudID} = req.params;
        const crud = await CrudSchema.findByIdAndUpdate({_id: crudID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!crud){
            return res.statusnode(404).json({messgae: 'No Items with that ID'})
        }
        res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


const deleteData = async (req, res) => {
    try {
        const {itemID:crudID} = req.params;
        const crud = await CrudSchema.findByIdAndDelete({_id:crudID});

        if(!crud){
            return res.status(404).json({messgae: 'No Items with that ID'})
        }
        
        res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


module.exports = {
    getAllData, createData, getOneItem, updateData, deleteData
}