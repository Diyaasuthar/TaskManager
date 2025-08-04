import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://diyaSuthar:Diya1234@cluster0.wbchg1l.mongodb.net/Taskflow')
    .then(() => console.log('DB Coonected'));
    
}
