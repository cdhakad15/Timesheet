import express from "express";
import { createEmployee, deleteEmployeeId, getAllEmployess, getEmployeeById, updatedEmployeeId } from "../controllers/employee.controller.js";


const router = express.Router();

router.post("/create",createEmployee);

router.get("/allEmployee",getAllEmployess);


router.get('/:id', getEmployeeById);

//router.get("/employeeById/:id",getEmployeeById);

router.put("/update/:id", updatedEmployeeId);

router.delete("/delete/:id", deleteEmployeeId);

export default router;