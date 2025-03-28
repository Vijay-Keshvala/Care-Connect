import express from "express";
import { doctorList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList); // ✅ Correct method (GET request)

export default doctorRouter
