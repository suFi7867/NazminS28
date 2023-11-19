import mongoose from "mongoose"


const main = async ()=>{
   await mongoose.connect(`mongodb+srv://sufi:sufi@cluster0.bqqyl.mongodb.net/wrikedeploye?retryWrites=true&w=majority`)
   
   console.log("CONNECTED TO DB")
} 

export default main