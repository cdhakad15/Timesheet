import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import employeeRoutes from "./routes/employee.route.js"
import ratingRoutes from "./routes/rating.route.js"
import timeSheetRoutes from "./routes/timesheet.route.js"
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/timesheet").then(()=>{
    console.log("DB is connected succesfully");

    app.listen(PORT,()=>{
        console.log(`Server is running on PORT : ${PORT}`);
    });
}).catch(error=>console.log(error));

app.use("/employees", employeeRoutes);
app.use("/ratings", ratingRoutes);
app.use("/timesheets",timeSheetRoutes);