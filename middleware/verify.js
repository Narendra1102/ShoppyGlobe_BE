import jwt from 'jsonwebtoken'
import userModel from '../model/user.model.js';


//verify the token
export async function verifyToken(req,res,next){
    if(req.headers && req.headers.authorization
    && req.headers.authorization.split(" ")[0]=="JWT"){
        let token=req.headers.authorization.split(" ")[1]
        
        try{
            const decoded = jwt.verify(token, 'SECRETKEY');
            req.user = await userModel.findById(decoded.id).select("-password");
        }
        catch(err){
            res.status(401).json({msg:"User is not authorized"})
        }
        
        next()
    }
    else{
        return res.status(404).json({msg: "Token does not exists"})
    }

}
