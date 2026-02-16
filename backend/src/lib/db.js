import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED:", conn.connection.host);
    } catch (error) {
        console.error("Error connection to MONGODB:", error);
        process.exit(1);
    }
};