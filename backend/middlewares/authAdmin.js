import jwt from 'jsonwebtoken'

//admin middleware authentication//

const authAdmin = async (req,res,next)=>{
    try {
        const {atkon} = req.headers
        if(!atoken){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(atkon,process.env.JWT_TOKEN)

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }

        next()

    } catch (error) {
        onsole.log(error);
    res.json({success:false,messgae:error.messgae})
    }
}

export default authAdmin