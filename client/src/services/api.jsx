import axios from "axios";


const instance = axios.create({
  baseURL:"http://localhost:3000",
  timeout:5000,
});

export const fetchEmployees =  async ()=>{
   return await instance.get("/employees");
}


export const fetchEmployeeById = (id)=>{
   return instance.get(`/employees/${id}`)
}

export const submitRating = (ratingData)=>{
  return instance.post("/ratings",ratingData);
}

export const fetchTimesheets = ()=>{
    return instance.get("/timesheets");
}

export const submitTimesheetEntry = (timesheetData)=>{
    return instance.post("/timesheets", timesheetData);
};

export default instance;

