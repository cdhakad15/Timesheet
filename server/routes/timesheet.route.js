import express from "express";
import { createTimesheetEntry, deleteTimesheetEntryById, getAllEmployeeTimesheet, getEmployeeTimesheets, updateTimesheetEntryById } from "../controllers/timesheet.controller.js";


const router = express.Router();

router.post("/create", createTimesheetEntry);

router.get("/employee/:employeeId",getEmployeeTimesheets);

router.get("/getAllEmployeeTimesheet", getAllEmployeeTimesheet)

router.put("/update/:id", updateTimesheetEntryById);

router.delete("/delete/:id", deleteTimesheetEntryById);

export default router;
