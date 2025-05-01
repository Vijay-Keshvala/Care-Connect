import jwt from 'jsonwebtoken'

//doctor middleware authentication//

const authDoctor = async (req,res,next)=>{
    try {

        const { dtoken } = req.headers;
        if(!dtoken){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_TOKEN)
        req.body.docId = token_decode.id

        next()

    } catch (error) {
        console.log(error);
    res.json({success:false,messgae:error.messgae})
    }
}

export default authDoctor