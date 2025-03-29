import jwt from 'jsonwebtoken'

//admin middleware authentication//

const authUser = async (req,res,next)=>{
    try {

        const { token } = req.headers;
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(token,process.env.JWT_TOKEN)
        req.body.userId = token_decode.id

        next()

    } catch (error) {
        console.log(error);
    res.json({success:false,messgae:error.messgae})
    }
}

export default authUser