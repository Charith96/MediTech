import express from "express";

import { createAssigns, getAllAssigns, getAssignById, updateAssign, deleteAssign } from "../controller/assign.js";

const router = express.Router();

router.get('/', getAllAssigns);
router.post('/add', createAssigns);
router.get('/:id', getAssignById);
router.put('/update/:id', updateAssign);
router.delete('/delete/:id', deleteAssign);

export default router;