import validator from 'validator'
import bcrypt from 'bcryptjs'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
// API for adding doctor //



const addDoctor = async(req,res)=>{


    try {
        const {name, email, password, speciality, degree, experience, about, fees, address} =  req.body
        const imageFile = req.file
        
        // checking all data to add doctor //
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false,messgae:"Missing data "})
        }

        // validating email //
        if(!validator.isEmail(email)){
            return res.json({success:false,messgae:"Please enter valid email "})
        }

        // validating password strong //
        if(password.length < 8){
            return res.json({success:false,messgae:"Password should be strong "})
        }

        // hashing password //
        const salt = await bcrypt.genSalt(10)
        const hasshedPassword = await bcrypt.hash(password,salt)

        //upload image to cloudinary //
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hasshedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,messgae:"Doctor Added"})
    
    } catch (error) {
        console.log(error);
        res.json({success:false,messgae:error.messgae})
    }


}

export {addDoctor}