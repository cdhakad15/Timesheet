

import Timesheet from "../models/timesheet.model.js";

export const createTimesheetEntry = async(req,res)=>{
    try {
        const{employee, date, hoursWorked, taskDescription}= req.body;
        
        const existingEntry = await Timesheet.findOne({employee,date});
        if(existingEntry){
            return res.status(400).json({message:"Timesheet entry already exists for this date."})
        }

        const newTimesheetEntry = new Timesheet({
            employee,
            date,
            hoursWorked,
            taskDescription
        });

        await newTimesheetEntry.save();
        res.status(201).json(newTimesheetEntry);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
}


export const getEmployeeTimesheets = async(req,res)=>{
    const{employeeId} = req.params;

    try {
        const timesheets = await Timesheet.find({employee:employeeId});
        res.status(200).json(timesheets);
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}


export const getAllEmployeeTimesheet = async(req,res)=>{
    try {
        const timesheet = await Timesheet.find();
        res.status(200).json(timesheet)
    } catch (error) {
        res.status(500).json({message:message.error})

    }
}

export const updateTimesheetEntryById = async(req,res)=>{
      const {id}= req.params;
      try {
        const updateEntry = await Timesheet.findByIdAndUpdate(id,req.body,{
            new:true
        });
        if(!updateEntry){
            return res.status(404).json({message:"Timesheet entry not found"});
        }
        res.status(200).json(updateEntry);
      } catch (error) {
        res.status(500).json({message:message.error})
      }
}



export const deleteTimesheetEntryById = async(req,res)=>{
    const {id}= req.params;

    try {
        const deleteEntry = await Timesheet.findByIdAndDelete(id);
        if(!deleteEntry){
            return res.status(404).json({message:"Timesheet entry not found"});
        }
        res.status(200).json({message:"TimeSheet delete successfully"})
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}