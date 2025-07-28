import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI!;//! here ,means trust me its not undefined

export const connectToDb = () => {
    if(mongoose.connection.readyState === 1) return;
    return mongoose.connect(MONGO_URI);
}