import Employee from "../models/employee.model.js"




export const createEmployee = async (req, res) => {
    try {
      const { name, email, reportingManager } = req.body;
      const employee = new Employee({ name, email, reportingManager });
      await employee.save();
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

export const getAllEmployess = async(rrq,res)=>{
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getEmployeeById = async(req,res)=>{
    const {id}= req.params;
    try {
        const employee = await Employee.findById(id);
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message:error.message});

    }
}

export const updatedEmployeeId = async(req,res)=>{
    const {id} = req.params;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body,{
            new:true
        });
        if(!updatedEmployee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(updatedEmployee)
    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}




export const deleteEmployeeId = async(req,res)=>{
    const {id}= req.params;
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(id);
        if(!deleteEmployee){
            res.status(404).json({message:"Employee not found"});
        }
        return res.status(200).json({message:"Employee deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message});

    }   
}