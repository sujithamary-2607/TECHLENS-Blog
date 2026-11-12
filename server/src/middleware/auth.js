import jwt from 'jsonwebtoken';
export function protect(req,res,next){try{const token=req.headers.authorization?.split(' ')[1];if(!token)return res.status(401).json({message:'Authentication required'});req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Invalid or expired session'});}}
export function adminOnly(req,res,next){if(!['admin','editor'].includes(req.user?.role))return res.status(403).json({message:'Insufficient permissions'});next();}
