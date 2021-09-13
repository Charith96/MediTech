import express from "express";
import db from "./config/database.js";
import assign from "./routes/assign.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.log('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/assigns', assign);

app.listen(5000, () => console.log(`Sever running at port 5000`));