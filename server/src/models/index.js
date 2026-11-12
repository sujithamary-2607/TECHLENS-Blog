import mongoose from 'mongoose';
const {Schema,model}=mongoose;
const authorSchema=new Schema({name:{type:String,required:true},bio:String,avatar:String,email:String},{timestamps:true});
const categorySchema=new Schema({name:{type:String,required:true,unique:true},slug:{type:String,required:true,unique:true},description:String},{timestamps:true});
const tagSchema=new Schema({name:{type:String,required:true,unique:true},slug:{type:String,required:true,unique:true}},{timestamps:true});
const userSchema=new Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true},role:{type:String,enum:['admin','editor'],default:'admin'}},{timestamps:true});
const postSchema=new Schema({title:{type:String,required:true},slug:{type:String,required:true,unique:true},excerpt:String,content:{type:String,required:true},featuredImage:String,author:{type:Schema.Types.ObjectId,ref:'Author'},category:{type:Schema.Types.ObjectId,ref:'Category'},tags:[{type:Schema.Types.ObjectId,ref:'Tag'}],status:{type:String,enum:['draft','published','scheduled'],default:'draft'},publishedAt:Date,scheduledAt:Date,featured:{type:Boolean,default:false},views:{type:Number,default:0},seoTitle:String,metaDescription:String},{timestamps:true});
postSchema.index({title:'text',excerpt:'text',content:'text'});
export const Author=model('Author',authorSchema); export const Category=model('Category',categorySchema); export const Tag=model('Tag',tagSchema); export const User=model('User',userSchema); export const Post=model('Post',postSchema);
