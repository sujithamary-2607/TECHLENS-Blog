import 'dotenv/config';import express from 'express';import mongoose from 'mongoose';import cors from 'cors';import helmet from 'helmet';import morgan from 'morgan';import rateLimit from 'express-rate-limit';import cron from 'node-cron';import path from 'path';import api from './routes/api.js';import {Post} from './models/index.js';
const requiredEnv = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length) {
 console.error(`Missing required environment values: ${missingEnv.join(', ')}. Copy .env.example to .env and configure it.`);
 process.exit(1);
}
if (process.env.JWT_SECRET.length < 32) {
 console.error('JWT_SECRET must contain at least 32 characters.');
 process.exit(1);
}
const app=express();app.use(helmet({crossOriginResourcePolicy:{policy:'cross-origin'},contentSecurityPolicy:false}));app.use(cors({origin:(origin,callback)=>{if(!origin)return callback(null,true);let allowed=false;try{const u=new URL(origin);allowed=['localhost','127.0.0.1'].includes(u.hostname)&&/^\d+$/.test(u.port||'80')&&Number(u.port||80)>=5173&&Number(u.port||80)<=5190;}catch{};if(origin===(process.env.CLIENT_URL||'http://localhost:5173'))allowed=true;callback(allowed?null:new Error('CORS origin not allowed'),allowed);}}));app.use(express.json({limit:'5mb'}));app.use(express.urlencoded({extended:true,limit:'5mb'}));app.use((req,res,next)=>{if(req.body===undefined||req.body===null||typeof req.body!=='object')req.body={};next();});app.use(morgan('dev'));app.use('/api',rateLimit({windowMs:15*60*1000,max:300}));app.use('/uploads',express.static(path.resolve('uploads')));app.use('/api',api);app.get('/robots.txt',(_,res)=>res.type('text/plain').send('User-agent: *\nAllow: /\nSitemap: '+(process.env.CLIENT_URL||'http://localhost:5173')+'/api/sitemap.xml'));
app.get('/api/health',(_,res)=>res.json({status:'ok',service:'TECH LENS Blog API'}));app.use((err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error'});});
const port=Number(process.env.PORT)||5055;mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log('MongoDB connected');app.listen(port,'0.0.0.0',()=>console.log(`API listening on port ${port}`));}).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
cron.schedule('* * * * *',async()=>{try{await Post.updateMany({status:'scheduled',scheduledAt:{$lte:new Date()}},{$set:{status:'published',publishedAt:new Date()}})}catch(e){console.error('Publish scheduler:',e.message)}});
