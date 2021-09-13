import Assign from "../models/assignModel.js";

//display all asigns
export const getAllAssigns = async (req, res) => {
    try {
        const assigns = await Assign.findAll();
        res.json(assigns);        
    } catch (error) {
        res.json({ message: error.message });
    }
}

//create assign
export const createAssigns = async (req, res) => {
    try {
        await Assign.create(req.body);
        res.status(201).json({ message: 'Assign created' });
        // res.json({
        //     "message": "Assign created"
        // });        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get specific assign
export const getAssignById = async (req, res) => {
    try {
        const assign = await Assign.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(assign[0]);        
    } catch (error) {
        res.json({ message: error.message });
    }
}

//update assign
export const updateAssign = async (req, res) => {
    try {
        await Assign.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({
            "message": "Assign Updated"
        });        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//delete assign
export const deleteAssign = async (req, res) => {
    try {
        await Assign.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({
            "message": "Assign Deleted"
        });        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


