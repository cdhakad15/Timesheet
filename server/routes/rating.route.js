
import express from "express";
import { getEmployeeRatings, rateEmployee } from "../controllers/rating.controller.js";


const router = express.Router();

router.post("/rate", rateEmployee);

//router.get('/employee/:id', getEmployeeRatings);
router.get('/employee/:employeeId', getEmployeeRatings);


export default router;